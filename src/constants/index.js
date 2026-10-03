import {
  mobile,
  web,
  javascript,
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
  saas,
  dashboard,
  ecommerce,
  khaled,
  codeAcademy,
  medscan,
  elkobasy,
  stepone,
  emoco,
  wallet,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
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
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'HTML 5',
    icon: html1,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  // 	name: "docker",
  // 	icon: docker,
  // },
];

const experiences = [
  {
    title: '3 months Intensive Code Camp (ITI)',
    company_name: '',
    icon: iti,
    iconBg: '#FAE0C5',
    date: 'april 2022 - August 2021',
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      '			Information Technology Institute Track Front End and Cross  plate Form',
    ],
  },
  {
    title: '3 months Intensive Code Camp (ITI)',
    company_name: '',
    icon: iti,
    iconBg: '#E6DEDD',
    date: 'september 2021 - march 2022',
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      'Information Technology Institute Track Software Engineering  Development fundamentals',
    ],
  },
  {
    title: 'Commerce faculty Ain shams university',
    company_name: '',
    icon: commerce,
    iconBg: '#383E56',
    date: 'Jan 2014 - Jan 2018',
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      'Accounting',
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
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

// const projects = [
//   {
//     techName: 'React',
//     name: 'Fitness & Recipes',
//     description:
//       // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//       "It's website with functionality to choose exercise categories browse more than one thousand exercises with practical examples,pagination, exercise details, also enables users to search for Healty Recipes ,findout ingrediants ,percentage of the material of recipe ,number of Calories, related videos from youtube and display similar for both (Exercise and recipe)",
//     tags: [
//       {
//         name: 'react',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Rapit API',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'Matrial Ui',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: saas,
//     source_code_link: 'https://github.com/mai928/Fitness_Recipes',
//     live_Demo: 'https://fitness-recipes-b1968b.netlify.app/',
//   },
//   {
//     techName: 'React',
//     name: 'Amazon Clone',
//     description:
//       // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//       "It's E-commerce Store with stripe , fully  functional from the users  signing in using their email and password (Authentication), adding items to the basket, checking their basket,  removing items if needed and proceeding to checkout.",

//     tags: [
//       {
//         name: 'react',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'stripe',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'Material Ui',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: amazon,
//     source_code_link: 'https://github.com/mai928/amazon_clone',
//     live_Demo: 'https://amazon-clone-fa9a89.netlify.app/',
//   },

//   {
//     techName: 'React',
//     name: 'Youtub Clone',
//     description:
//       // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       "It's a Responsive Website that have  video sections , custom catagories ,channel pages, search functionality and you can play videos straight on youtub clone  ",
//     tags: [
//       {
//         name: 'react',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Rapit API',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'Material ui',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: youtub,
//     source_code_link: 'https://github.com/mai928/youtub_clone',
//     live_Demo: 'https://youtub-clone-cb9c49.netlify.app/',
//   },
//   {
//     techName: 'React Native',
//     name: 'Authentication',
//     description:
//       // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       "That's Authentication task with api that allows user to signup with personal Account or Family Account ,signin using Json Web Token (JWT)and save token into AsyncStorage ,user don't need to input email and password anymore ,it will directly to main screen",
//     tags: [
//       {
//         name: 'Formik & yup',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'axios',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'AsyncStorage',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: registation,
//     source_code_link: 'https://github.com/mai928/Registration',
//   },
//   {
//     techName: 'React Native',
//     name: 'Todo List',
//     description:
//       // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       "It's TodoList that you can add The name of list and color from palette color ,when you complete task you can check it and the application will count for you the number of completed and uncompleted task ",
//     tags: [
//       {
//         name: 'React native',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'vector icon',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'react navigation',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: todo,
//     source_code_link: 'https://github.com/mai928/todolist',
//   },
//   {
//     techName: 'React Native',
//     name: 'Recipe App',
//     description:
//       // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       "It's recipe app with authentication allows user to sigin in and signup, choose favourite catagory and recipe details",
//     tags: [
//       {
//         name: 'React native',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'vector icon',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'Stack Navigation',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: recipe2,
//     source_code_link: 'https://github.com/mai928/Recipe-app',
//   },
//   {
//     techName: 'React Native',
//     name: 'Jobs',
//     description:
//       // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       'This application for find a suitable job using custom Hook with Integration API (Search Functionality) ,pagination functionality ,job details',

//     tags: [
//       {
//         name: 'Rapit API(axios)',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'expo-router',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'Vector icon',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: job,
//     source_code_link: 'https://github.com/mai928/find-job-app',
//   },

//   {
//     techName: 'React Native',
//     name: 'Blog App',
//     description:
//       // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//       "It's a blog app for apply a crud system that allow users to add Blog (name -content -Image) , Edit ,Delete and there are extra functionality dark mode and authentication  ",
//     tags: [
//       {
//         name: 'firebase',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'Bottom tab navigation',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'vector icon',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: blog,
//     source_code_link: 'https://github.com/mai928/Blog-App',
//   },
// ];

// Full projects array: your previous projects (unchanged) + the new ones.
// Import an image for each new project: lms, dashboard, ecommerce, codeAcademy,
// drKhaled, medscan, koubasy, portfolio, stepOne, emoco, wallet.

const projects = [
  //   {
  //     techName: 'React',
  //     name: 'Fitness & Recipes',
  //     description:
  //       // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //       "It's website with functionality to choose exercise categories browse more than one thousand exercises with practical examples,pagination, exercise details, also enables users to search for Healty Recipes ,findout ingrediants ,percentage of the material of recipe ,number of Calories, related videos from youtube and display similar for both (Exercise and recipe)",
  //     tags: [
  //       {
  //         name: 'react',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'Rapit API',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'Matrial Ui',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: saas,
  //     source_code_link: 'https://github.com/mai928/Fitness_Recipes',
  //     live_Demo: 'https://fitness-recipes-b1968b.netlify.app/',
  //   },
  {
    techName: 'React',
    name: 'Amazon Clone',
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "It's E-commerce Store with stripe , fully  functional from the users  signing in using their email and password (Authentication), adding items to the basket, checking their basket,  removing items if needed and proceeding to checkout.",

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'Material Ui',
        color: 'pink-text-gradient',
      },
    ],
    image: amazon,
    source_code_link: 'https://github.com/mai928/amazon_clone',
    live_Demo: 'https://amazon-clone-fa9a89.netlify.app/',
  },

  {
    techName: 'React',
    name: 'Youtub Clone',
    description:
      // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      "It's a Responsive Website that have  video sections , custom catagories ,channel pages, search functionality and you can play videos straight on youtub clone  ",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Rapit API',
        color: 'green-text-gradient',
      },
      {
        name: 'Material ui',
        color: 'pink-text-gradient',
      },
    ],
    image: youtub,
    source_code_link: 'https://github.com/mai928/youtub_clone',
    live_Demo: 'https://youtub-clone-cb9c49.netlify.app/',
  },
  {
    techName: 'React Native',
    name: 'Authentication',
    description:
      // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      "That's Authentication task with api that allows user to signup with personal Account or Family Account ,signin using Json Web Token (JWT)and save token into AsyncStorage ,user don't need to input email and password anymore ,it will directly to main screen",
    tags: [
      {
        name: 'Formik & yup',
        color: 'blue-text-gradient',
      },
      {
        name: 'axios',
        color: 'green-text-gradient',
      },
      {
        name: 'AsyncStorage',
        color: 'pink-text-gradient',
      },
    ],
    image: registation,
    source_code_link: 'https://github.com/mai928/Registration',
  },
  {
    techName: 'React Native',
    name: 'Todo List',
    description:
      // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      "It's TodoList that you can add The name of list and color from palette color ,when you complete task you can check it and the application will count for you the number of completed and uncompleted task ",
    tags: [
      {
        name: 'React native',
        color: 'blue-text-gradient',
      },
      {
        name: 'vector icon',
        color: 'green-text-gradient',
      },
      {
        name: 'react navigation',
        color: 'pink-text-gradient',
      },
    ],
    image: todo,
    source_code_link: 'https://github.com/mai928/todolist',
  },
  {
    techName: 'React Native',
    name: 'Recipe App',
    description:
      // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      "It's recipe app with authentication allows user to sigin in and signup, choose favourite catagory and recipe details",
    tags: [
      {
        name: 'React native',
        color: 'blue-text-gradient',
      },
      {
        name: 'vector icon',
        color: 'green-text-gradient',
      },
      {
        name: 'Stack Navigation',
        color: 'pink-text-gradient',
      },
    ],
    image: recipe2,
    source_code_link: 'https://github.com/mai928/Recipe-app',
  },
  {
    techName: 'React Native',
    name: 'Jobs',
    description:
      // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      'This application for find a suitable job using custom Hook with Integration API (Search Functionality) ,pagination functionality ,job details',

    tags: [
      {
        name: 'Rapit API(axios)',
        color: 'blue-text-gradient',
      },
      {
        name: 'expo-router',
        color: 'green-text-gradient',
      },
      {
        name: 'Vector icon',
        color: 'pink-text-gradient',
      },
    ],
    image: job,
    source_code_link: 'https://github.com/mai928/find-job-app',
  },

  {
    techName: 'React Native',
    name: 'Blog App',
    description:
      // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      "It's a blog app for apply a crud system that allow users to add Blog (name -content -Image) , Edit ,Delete and there are extra functionality dark mode and authentication  ",
    tags: [
      {
        name: 'firebase',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bottom tab navigation',
        color: 'green-text-gradient',
      },
      {
        name: 'vector icon',
        color: 'pink-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/mai928/Blog-App',
  },

  // ---------- NEW PROJECTS (live on Vercel) ----------
  {
    techName: 'Next.js',
    name: 'LMS SaaS Platform',
    description:
      'Full-stack learning platform with authentication, subscription plans, Stripe payments, and an AI voice agent (Vapi) for real-time learning sessions. Includes session history, bookmarks, user profiles, and Sentry monitoring.',
    tags: [
      { name: 'next js', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'stripe', color: 'pink-text-gradient' },
    ],
    // saas image
    image: saas,
    live_Demo: 'https://lms-saas-app-ogcs.vercel.app/',
  },
  {
    techName: 'Next.js',
    name: 'Modern Dashboard',
    description:
      'Responsive admin dashboard with reusable UI components, animated transitions, and data visualization using area, bar, and circular progress charts.',
    tags: [
      { name: 'next js', color: 'blue-text-gradient' },
      { name: 'tailwind css', color: 'green-text-gradient' },
      { name: 'shadcn ui', color: 'pink-text-gradient' },
    ],
    image: dashboard,
    live_Demo: 'https://ecommerce-dashboard-opal-psi.vercel.app/AdminDashboard',
  },
  {
    techName: 'Next.js',
    name: 'Modern Ecommerce',
    description:
      'Responsive e-commerce store with secure authentication, Stripe checkout, SEO-friendly server-side rendering, and cart/order state managed with Zustand.',
    tags: [
      { name: 'next js', color: 'blue-text-gradient' },
      { name: 'stripe', color: 'green-text-gradient' },
      { name: 'zustand', color: 'pink-text-gradient' },
    ],
    image: ecommerce,
    live_Demo: 'https://ecommerce-dashboard-opal-psi.vercel.app/Store',
  },
  {
    techName: 'JavaScript',
    name: 'Code Academy (Freelance)',
    description:
      'Learning platform with programming paths, flashcards, leveled practice challenges, quizzes, certificates, built-in search, and dark mode.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient' },
    ],
    image: codeAcademy,
    live_Demo: 'https://code-academey.vercel.app/',
  },
  {
    techName: 'Next.js',
    name: 'Dr. Khaled Clinic Website',
    description:
      'Bilingual (Arabic/English) fertility clinic website with About, Video, Blog, and Contact pages, an appointment form, and an embedded Google Map.',
    tags: [
      { name: 'next js', color: 'blue-text-gradient' },
      { name: 'react', color: 'green-text-gradient' },
      { name: 'arabic / english (RTL)', color: 'pink-text-gradient' },
    ],
    image: khaled,
    live_Demo: 'https://dr-khaled-sq7q.vercel.app/',
  },
  {
    techName: 'React',
    name: 'MedScan (Freelance)',
    description:
      'Responsive medical web application built for a client, with a clean user-friendly interface and reusable components.',
    tags: [
      // TODO: replace with the real tech you used
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'responsive design', color: 'green-text-gradient' },
      { name: 'reusable components', color: 'pink-text-gradient' },
    ],
    image: medscan,
    live_Demo: 'https://med-scan-ten.vercel.app/',
  },
  {
    techName: 'React',
    name: 'Koubasy Landing Page',
    description:
      'Responsive landing page built from a UI/UX design, with reusable components and a layout optimized for mobile, tablet, and desktop.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'responsive design', color: 'green-text-gradient' },
      { name: 'ui/ux', color: 'pink-text-gradient' },
    ],
    image: elkobasy,
    live_Demo: 'https://landing-koubasy.vercel.app/',
  },
  //   {
  //     techName: 'React',
  //     name: 'My Portfolio',
  //     description:
  //       'Dynamic personal portfolio with a responsive design, interactive UI components, and live demos of my projects.',
  //     tags: [
  //       { name: 'react', color: 'blue-text-gradient' },
  //       { name: 'css', color: 'green-text-gradient' },
  //       { name: 'javascript', color: 'pink-text-gradient' },
  //     ],
  //     image: portfolio,
  //     live_Demo: 'https://my-portfolio-six-pi-67.vercel.app/',
  //   },
  {
    techName: 'React',
    name: 'Step One (Real Estate)',
    description:
      'Improved UI design and performance of an existing real estate website that showcases residential compounds.',
    tags: [
      // TODO: replace with the real tech you used
      { name: 'ui optimization', color: 'blue-text-gradient' },
      { name: 'performance', color: 'green-text-gradient' },
      { name: 'responsive design', color: 'pink-text-gradient' },
    ],
    image: stepone,
    live_Demo: 'https://steponeelite.com/en/',
  },
  {
    techName: 'React',
    name: 'Emoco Egypt',
    description:
      'Company website showcasing luxury swimming pool designs and 25+ years of industry experience.',
    tags: [
      // TODO: replace with the real tech you used
      { name: 'front-end', color: 'blue-text-gradient' },
      { name: 'responsive design', color: 'green-text-gradient' },
      { name: 'web design', color: 'pink-text-gradient' },
    ],
    image: emoco,
    live_Demo: 'https://emoco.vercel.app/',
  },
  {
    techName: 'React',
    name: 'Digital Wallet',
    description:
      'Wallet app to add funds, withdraw funds, view the current balance and transaction history, with data saved in the browser.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
      { name: 'local storage', color: 'pink-text-gradient' },
    ],
    image: wallet,
    live_Demo: 'https://digital-wallet-virid.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
