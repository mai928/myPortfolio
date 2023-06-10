import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../components/utils/motion";
import { SectionWrapper } from "../hoc";
import CV from "../assets/CV.pdf";
const ServiseCard = ({ title, index, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
				variants={fadeIn("right", "spring", 0.5, index, 0.75)}
			>
				<div
					className="bg-tertiary rounded-[28px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
				>
					<img className="w-16 h-16 object-contain " src={icon} alt={title} />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<p className={styles.sectionHeadText}>Overview</p>
			</motion.div>

			<motion.p
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				variants={fadeIn("", "", "0.1", "1")}
			>
				I'm a skilled software developer with experience in JavaScript, and
				expertise in frameworks like React and React native . I'm a quick
				learner and collaborate closely with clients to create efficient,
				scalable, and user-friendly solutions that solve real-world problems.
				Let's work together to bring your ideas to life!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((item, index) => (
					<ServiseCard key={item.title} index={index} {...item} />
				))}
			</div>

			<div className="mt-[80px] ">
				<motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
					<a
						className=" mr-1 py-4 rounded-l-[20px] px-14 border-solid border-[2px] green-pink-gradient"
						href={CV}
						target="_blank"
					>
						{" "}
						Show CV
					</a>

					<a
						className=" py-4 rounded-r-[20px] px-3 border-solid border-[2px] green-pink-gradient"
						href={CV}
						download={CV}
					>
						{" "}
						<i class="fa-solid fa-download"></i>
					</a>
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
