import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import LazyMount from "../LazyMount";

// Absolute path: a relative "./desktop_pc/..." breaks on nested routes / some hosts.
const MODEL = `${process.env.PUBLIC_URL || ""}/desktop_pc/scene.gltf`;

const Computers = ({ isMobile }) => {
	// Loaded ONCE (the old code loaded the same model twice).
	const { scene } = useGLTF(MODEL);
	const size = useThree((s) => s.size);
	const aspect = size.width / size.height;

	// Portrait screens are narrow, so shrink the model to keep it fully in view.
	const scale = aspect < 0.7 ? 0.42 : aspect < 1 ? 0.55 : 0.75;
	const position = aspect < 1 ? [0, -2.3, -1.8] : [0, -3.25, -1.5];

	return (
		<group>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow={!isMobile}
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={scene}
				scale={scale}
				position={position}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</group>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(max-width: 768px)");
		setIsMobile(mq.matches);
		const onChange = (e) => setIsMobile(e.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);

	return (
		<LazyMount className="absolute inset-0 w-full h-full" rootMargin="0px">
			<Canvas
				frameloop="demand"
				shadows={!isMobile}
				dpr={[1, isMobile ? 1.5 : 2]}
				camera={{ position: [20, 3, 5], fov: isMobile ? 32 : 25 }}
				gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
				onCreated={({ gl, invalidate }) => {
					// Recover instead of showing a blank canvas if the browser drops the context.
					const c = gl.domElement;
					c.addEventListener("webglcontextlost", (e) => e.preventDefault());
					c.addEventListener("webglcontextrestored", () => invalidate());
				}}
			>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls
						enableZoom={false}
						enablePan={false}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2}
					/>
					<Computers isMobile={isMobile} />
				</Suspense>
			</Canvas>
		</LazyMount>
	);
};

useGLTF.preload(MODEL);

export default ComputersCanvas;
