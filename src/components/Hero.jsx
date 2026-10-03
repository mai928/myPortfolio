import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import TypedText from "./TypedText";

// Defined outside the component so the array identity is stable.
const PHRASES = [
	"I build fast React & Next.js web apps",
	"I craft smooth cross-platform mobile apps",
	"I turn creative ideas into pixel-perfect UI",
	"Clean code. Great UX. Real results.",
];

const Hero = () => {
	return (
		<section
			className="relative w-full h-screen mx-auto"
			style={{ height: "100svh" }}
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient"></div>
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915eff]">Mai</span>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100 min-h-[3.2em] sm:min-h-[2.6em] max-w-[560px]`}
					>
						<TypedText phrases={PHRASES} />
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center z-10">
				<a href="#about" aria-label="Scroll down">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							className="w-3 h-3 rounded-full bg-secondary mb-1"
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
