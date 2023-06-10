import React, {  useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "./utils/motion";
import { github } from "../assets";

const ProjectCard = ({
	name,
	tags,
	description,
	image,
	source_code_link,
	live_Demo,
	techName,
}) => {
	return (
		<motion.div className="mr-[24px] mb-[24px]">
			<Tilt
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
			>
				<div className="relative w-full h-[230px]">
					<img
						className="w-full h-full  object-cover  rounded-2xl "
						src={image}
						alt={name}
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(source_code_link, "_blank")}
						>
							<img
								className="w-1/2 h-1/2 object-cover"
								src={github}
								alt={github}
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					{" "}
					<h3 className="text-white font-bold text-[24px]">{name}</h3>{" "}
					<p className="text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							{tag.name}
						</p>
					))}
				</div>

				{techName === "React Native" ? (
					""
				) : (
					<div
						className="cursor-pointer"
						onClick={() => {
							window.open(live_Demo, "_blank");
						}}
					>
						<p
							className={`text-[14px] text-teal-200 mt-3  mb-2 capitalize tracking-wider`}
						>
							{" "}
							live Demo
						</p>
					</div>
				)}
			</Tilt>
		</motion.div>
	);
};
const Works = () => {
	const [active, setActive] = useState("All");

	const menuItem = projects.reduce(
		(value, item) => {
			if (!value.includes(item.techName)) {
				value.push(item.techName);
			}

			return value;
		},
		["All"],
	);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work </p>
				<p className={styles.sectionHeadText}>Projects</p>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					className="text-secondary mt-3 text-[17px] max-w-3xl  leading-[30px]"
					variants={fadeIn("", "", 0.2, 1)}
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="flex flex-row gap-28 ml-2 mt-16">
				{menuItem.map((item, index) => (
					<button
						className={`rounded-2xl  border-white border-x-[1px] border-y-[1px] sm:h-11 sm:w-[160px]  xs:h-12 xs:w-[170px] ${
							active === item
								? "text-white md:text-[18px] sm:text-[14px]  xs:text-[15px]  font-medium"
								: "text-gray-500 sm:text-[15px] xs:text-[13px] border-gray-500"
						}`}
						onClick={() => setActive(item)}
						key={index}
					>
						{item}
					</button>
				))}
			</div>

			<div className="mt-14 flex flex-wrap">
				{projects.map((pro, index) => {
					return (
						<div>
							{active === "All" && (
								<ProjectCard key={pro.name} index={index} {...pro} />
							)}

							{active === pro.techName && (
								<ProjectCard key={pro.name} index={index} {...pro} />
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
export default SectionWrapper(Works, "work");
