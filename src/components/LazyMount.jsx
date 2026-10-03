import React, { useEffect, useRef, useState } from "react";

// Renders children only while the box is near the viewport.
// Unmounting off-screen canvases frees GPU memory and WebGL contexts (mobile browsers allow ~8).
const LazyMount = ({ children, className, rootMargin = "200px" }) => {
	const ref = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || !("IntersectionObserver" in window)) {
			setShow(true);
			return;
		}
		const io = new IntersectionObserver(([e]) => setShow(e.isIntersecting), {
			rootMargin,
		});
		io.observe(el);
		return () => io.disconnect();
	}, [rootMargin]);

	return (
		<div ref={ref} className={className}>
			{show ? children : null}
		</div>
	);
};

export default LazyMount;
