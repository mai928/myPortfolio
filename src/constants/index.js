import {
	mobile,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	git,
	figma,
	threejs,
	amazon,
	fitness,
	youtub,
	registation,
	recipe2,
	todo,
	job,
	blog,
	iti,
	commerce,
	html1,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	// {
	// 	title: "Backend Developer",
	// 	icon: backend,
	// },
	// {
	// 	title: "Content Creator",
	// 	icon: creator,
	// },
];

const technologies = [
	
	// {
	// 	name: "TypeScript",
	// 	icon: typescript,
	// },
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	// {
	// 	name: "Node JS",
	// 	icon: nodejs,
	// },
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "HTML 5",
		icon: html1,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	// {
	// 	name: "docker",
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: "3 months Intensive Code Camp (ITI)",
		company_name: "",
		icon: iti,
		iconBg: "#FAE0C5",
		date: "april 2022 - August 2021",
		points: [
			// "Developing and maintaining web applications using React.js and other related technologies.",
			// "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			// "Implementing responsive design and ensuring cross-browser compatibility.",
			// "Participating in code reviews and providing constructive feedback to other developers.",
			"			Information Technology Institute Track Front End and Cross  plate Form",
		],
	},
	{
		title: "3 months Intensive Code Camp (ITI)",
		company_name: "",
		icon: iti,
		iconBg: "#E6DEDD",
		date: "september 2021 - march 2022",
		points: [
			// "Developing and maintaining web applications using React.js and other related technologies.",
			// "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			// "Implementing responsive design and ensuring cross-browser compatibility.",
			// "Participating in code reviews and providing constructive feedback to other developers.",
			"Information Technology Institute Track Software Engineering  Development fundamentals",
		],
	},
	{
		title: "Commerce faculty Ain shams university",
		company_name: "",
		icon: commerce,
		iconBg: "#383E56",
		date: "Jan 2014 - Jan 2018",
		points: [
			// "Developing and maintaining web applications using React.js and other related technologies.",
			// "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			// "Implementing responsive design and ensuring cross-browser compatibility.",
			// "Participating in code reviews and providing constructive feedback to other developers.",
			"Accounting",
		],
	},
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#E6DEDD",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		techName: "React",
		name: "Fitness & Recipes",
		description:
			// "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
			"It's website with functionality to choose exercise categories browse more than one thousand exercises with practical examples,pagination, exercise details, also enables users to search for Healty Recipes ,findout ingrediants ,percentage of the material of recipe ,number of Calories, related videos from youtube and display similar for both (Exercise and recipe)",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Rapit API",
				color: "green-text-gradient",
			},
			{
				name: "Matrial Ui",
				color: "pink-text-gradient",
			},
		],
		image: fitness,
		source_code_link: "https://github.com/mai928/Fitness_Recipes",
		live_Demo: "https://fitness-recipes-b1968b.netlify.app/",
	},
	{
		techName: "React",
		name: "Amazon Clone",
		description:
			// "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
			"It's E-commerce Store with stripe , fully  functional from the users  signing in using their email and password (Authentication), adding items to the basket, checking their basket,  removing items if needed and proceeding to checkout.",

		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "stripe",
				color: "green-text-gradient",
			},
			{
				name: "Material Ui",
				color: "pink-text-gradient",
			},
		],
		image: amazon,
		source_code_link: "https://github.com/mai928/amazon_clone",
		live_Demo: "https://amazon-clone-fa9a89.netlify.app/",
	},

	{
		techName: "React",
		name: "Youtub Clone",
		description:
			// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
			"It's a Responsive Website that have  video sections , custom catagories ,channel pages, search functionality and you can play videos straight on youtub clone  ",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Rapit API",
				color: "green-text-gradient",
			},
			{
				name: "Material ui",
				color: "pink-text-gradient",
			},
		],
		image: youtub,
		source_code_link: "https://github.com/mai928/youtub_clone",
		live_Demo: "https://youtub-clone-cb9c49.netlify.app/",
	},
	{
		techName: "React Native",
		name: "Authentication",
		description:
			// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
			"That's Authentication task with api that allows user to signup with personal Account or Family Account ,signin using Json Web Token (JWT)and save token into AsyncStorage ,user don't need to input email and password anymore ,it will directly to main screen",
		tags: [
			{
				name: "Formik & yup",
				color: "blue-text-gradient",
			},
			{
				name: "axios",
				color: "green-text-gradient",
			},
			{
				name: "AsyncStorage",
				color: "pink-text-gradient",
			},
		],
		image: registation,
		source_code_link: "https://github.com/mai928/Registration",
	},
	{
		techName: "React Native",
		name: "Todo List",
		description:
			// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
			"It's TodoList that you can add The name of list and color from palette color ,when you complete task you can check it and the application will count for you the number of completed and uncompleted task ",
		tags: [
			{
				name: "React native",
				color: "blue-text-gradient",
			},
			{
				name: "vector icon",
				color: "green-text-gradient",
			},
			{
				name: "react navigation",
				color: "pink-text-gradient",
			},
		],
		image: todo,
		source_code_link: "https://github.com/mai928/todolist",
	},
	{
		techName: "React Native",
		name: "Recipe App",
		description:
			// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
			"It's recipe app with authentication allows user to sigin in and signup, choose favourite catagory and recipe details",
		tags: [
			{
				name: "React native",
				color: "blue-text-gradient",
			},
			{
				name: "vector icon",
				color: "green-text-gradient",
			},
			{
				name: "Stack Navigation",
				color: "pink-text-gradient",
			},
		],
		image: recipe2,
		source_code_link: "https://github.com/mai928/Recipe-app",
	},
	{
		techName: "React Native",
		name: "Jobs",
		description:
			// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
			"This application for find a suitable job using custom Hook with Integration API (Search Functionality) ,pagination functionality ,job details",

		tags: [
			{
				name: "Rapit API(axios)",
				color: "blue-text-gradient",
			},
			{
				name: "expo-router",
				color: "green-text-gradient",
			},
			{
				name: "Vector icon",
				color: "pink-text-gradient",
			},
		],
		image: job,
		source_code_link: "https://github.com/mai928/find-job-app",
	},

	{
		techName: "React Native",
		name: "Blog App",
		description:
			// "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
			"It's a blog app for apply a crud system that allow users to add Blog (name -content -Image) , Edit ,Delete and there are extra functionality dark mode and authentication  ",
		tags: [
			{
				name: "firebase",
				color: "blue-text-gradient",
			},
			{
				name: "Bottom tab navigation",
				color: "green-text-gradient",
			},
			{
				name: "vector icon",
				color: "pink-text-gradient",
			},
		],
		image: blog,
		source_code_link: "https://github.com/mai928/Blog-App",
	},
];

export { services, technologies, experiences, testimonials, projects };
