import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import LazyMount from "../LazyMount";

const MODEL = `${process.env.PUBLIC_URL || ""}/planet/scene.gltf`;

const Earth = () => {
	const earth = useGLTF(MODEL);
	return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => (
	<LazyMount className="w-full h-full">
		<Canvas
			frameloop="demand"
			dpr={[1, 1.5]}
			camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
			gl={{ antialias: false }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />
			</Suspense>
		</Canvas>
	</LazyMount>
);

export default EarthCanvas;
