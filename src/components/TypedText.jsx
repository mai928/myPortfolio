import React, { useEffect, useState } from "react";

// Types a phrase, holds it, deletes it, then types the next one - forever.
const TypedText = ({
	phrases,
	typeSpeed = 55,
	deleteSpeed = 28,
	hold = 1600,
	gap = 350,
}) => {
	const [text, setText] = useState("");

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setText(phrases[0]);
			return;
		}
		let i = 0,
			c = 0,
			deleting = false,
			timer;
		const tick = () => {
			const s = phrases[i];
			if (!deleting) {
				c++;
				setText(s.slice(0, c));
				if (c === s.length) {
					deleting = true;
					timer = setTimeout(tick, hold);
					return;
				}
				timer = setTimeout(tick, typeSpeed);
			} else {
				c--;
				setText(s.slice(0, c));
				if (c === 0) {
					deleting = false;
					i = (i + 1) % phrases.length;
					timer = setTimeout(tick, gap);
					return;
				}
				timer = setTimeout(tick, deleteSpeed);
			}
		};
		timer = setTimeout(tick, gap);
		return () => clearTimeout(timer);
	}, [phrases, typeSpeed, deleteSpeed, hold, gap]);

	return (
		<span aria-label={phrases[0]}>
			{text}
			<span className="typed-cursor" aria-hidden="true" />
		</span>
	);
};

export default TypedText;
