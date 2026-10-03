import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Decal, useTexture } from "@react-three/drei";
import LazyMount from "../LazyMount";

const CELL = 124; // grid cell in px
const RADIUS = 50; // ball radius in px

const Ball = ({ icon, x, y }) => {
	const [decal] = useTexture([icon]);
	const [hover, setHover] = useState(false);
	return (
		<group
			position={[x, y, 0]}
			scale={hover ? RADIUS * 1.12 : RADIUS}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<Float speed={1.75} rotationIntensity={1} floatIntensity={2.5}>
				<mesh>
					<icosahedronGeometry args={[1, 1]} />
					<meshStandardMaterial
						color="#fff8eb"
						polygonOffset
						polygonOffsetFactor={5}
						flatShading
					/>
					<Decal
						position={[0, 0, 1]}
						rotation={[2, Math.PI, 0, 6.25]}
						flatShading
						map={decal}
					/>
				</mesh>
			</Float>
		</group>
	);
};

const BallsCanvas = ({ icons }) => {
	const ref = useRef(null);
	const [w, setW] = useState(0);

	useEffect(() => {
		const el = ref.current;
		setW(el.clientWidth);
		const ro = new ResizeObserver(([e]) => setW(Math.floor(e.contentRect.width)));
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	const n = icons.length;
	const cols = Math.max(1, Math.min(n, Math.floor(w / CELL)));
	const rows = Math.ceil(n / cols);

	return (
		<div ref={ref} className="w-full" style={{ height: rows * CELL }}>
			{w > 0 && (
				<LazyMount className="w-full h-full">
					<Canvas
						orthographic
						camera={{ zoom: 1, position: [0, 0, 200], near: 0.1, far: 1000 }}
						dpr={[1, 2]}
					>
						<ambientLight intensity={1.1} />
						<directionalLight position={[40, 60, 200]} intensity={1.6} />
						<Suspense fallback={null}>
							{icons.map((icon, i) => {
								const row = Math.floor(i / cols);
								const inRow = row === rows - 1 ? n - row * cols : cols;
								const col = i - row * cols;
								return (
									<Ball
										key={i}
										icon={icon}
										x={(col - (inRow - 1) / 2) * CELL}
										y={((rows - 1) / 2 - row) * CELL}
									/>
								);
							})}
						</Suspense>
					</Canvas>
				</LazyMount>
			)}
		</div>
	);
};

export default BallsCanvas;
