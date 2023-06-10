import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { textVariant } from "./utils/motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";

const ExperienceCard = ({index, date, title, company_name, iconBg, icon ,points}) => (
	<VerticalTimelineElement
		contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
		contentArrowStyle={{ borderRight: "7px solid #232631" }}
		date={date}
		iconStyle={{ background: iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					className="w-[80%] h-[80%] object-contain rounded-full"
					src={icon}
					alt={company_name}
				/>
			</div>
		}
	>
		<h3 className="text-white text-[24px] font-bold">{title}</h3>
    <p className="text-secondary  text-[16px] font-semibold "style={{margin:0}}>{company_name}</p>
    <div className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point)=>(
        <p key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</p>
      ))}
    </div>
	</VerticalTimelineElement>
);
const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<p className={styles.sectionHeadText}>Education</p>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((item, index) => (
						<ExperienceCard key={item.title} index={index} {...item} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
