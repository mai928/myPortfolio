import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import LazyMount from "../LazyMount";

const Stars = (props) => {
	const ref = useRef();
	// Length must be a multiple of 3; fewer points on small screens.
	const sphere = useMemo(() => {
		const count = window.innerWidth < 768 ? 2400 : 4998;
		return random.inSphere(new Float32Array(count), { radius: 1.2 });
	}, []);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => (
	<LazyMount className="w-full h-full absolute inset-0 z-[-1]" rootMargin="0px">
		<Canvas
			camera={{ position: [0, 0, 1] }}
			dpr={[1, 1.5]}
			gl={{ antialias: false, powerPreference: "low-power" }}
		>
			<Suspense fallback={null}>
				<Stars />
			</Suspense>
		</Canvas>
	</LazyMount>
);

export default StarsCanvas;
