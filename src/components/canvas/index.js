import React, { lazy, Suspense } from "react";

const withLazy = (loader) => {
	const C = lazy(loader);
	return function LazyCanvas(props) {
		return (
			<Suspense fallback={null}>
				<C {...props} />
			</Suspense>
		);
	};
};

export const EarthCanvas = withLazy(() => import("./Earth"));
export const BallCanvas = withLazy(() => import("./Balls"));
export const ComputersCanvas = withLazy(() => import("./Computers"));
export const StarsCanvas = withLazy(() => import("./Stars"));
