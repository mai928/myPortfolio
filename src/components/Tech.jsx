import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const icons = technologies.map((t) => t.icon);

const Tech = () => (
	<div>
		<BallCanvas icons={icons} />
		<ul className="sr-only">
			{technologies.map((t) => (
				<li key={t.name}>{t.name}</li>
			))}
		</ul>
	</div>
);

export default SectionWrapper(Tech, "");
