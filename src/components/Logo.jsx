import React from "react";

const Logo = ({ className = "w-9 h-9" }) => (
	<svg viewBox="0 0 40 40" className={className} role="img" aria-label="Mai logo">
		<defs>
			<linearGradient id="mai-logo-g" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stopColor="#22d3ee" />
				<stop offset="1" stopColor="#915eff" />
			</linearGradient>
		</defs>
		<path
			d="M20 2l15 9v18l-15 9L5 29V11z"
			fill="#100d25"
			stroke="url(#mai-logo-g)"
			strokeWidth="2.5"
		/>
		<path
			d="M12 28V13l8 9 8-9v15"
			fill="none"
			stroke="url(#mai-logo-g)"
			strokeWidth="3.2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default Logo;
