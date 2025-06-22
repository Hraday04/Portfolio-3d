import { path } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Personal old Portfolio",
    description:
      "A modern and interactive portfolio website to showcase personal projects, skills, and contact details in a clean and responsive format.",
    subDescription: [
      "Developed using HTML, CSS, and JavaScript to create a lightweight, fast-loading site.",
      "Designed a visually appealing and mobile-friendly UI with scroll animations and smooth transitions.",
      "Showcases project highlights, technical skills, and links to GitHub and social profiles.",
      "Integrated a contact form for easy communication and potential collaboration opportunities.",
    ],
    href: "https://hraday04.github.io/portfolio/",
    logo: "",
    image: "/assets/projects/portfolio.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html.png",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css.png",
      },
      {
        id: 3,
        name: "JS",
        path: "/assets/logos/js.png",
      },
    ],
  },
  {
    id: 2,
    title: "TaskMaster – Productivity & Task Manager",
    description:
      "A sleek and intuitive task management web app that helps users organize, track, and complete their daily tasks efficiently.",
    subDescription: [
      "Built with React and Tailwind CSS for a fast, responsive, and modern user interface.",
      "Implemented dynamic task creation, editing, completion toggles, and real-time list updates.",
      "Utilized localStorage to persist tasks between sessions without backend dependencies.",
      "Designed for simplicity and focus, with clean layout and smooth UI animations to enhance productivity.",
    ],
    href: "https://taskmaster23.netlify.app/",
    logo: "",
    image: "/assets/projects/taskmaster.png",
    tags: [
      {
        id: 1,
        name: "JS",
        path: "/assets/logos/js.png",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.png",
      },
    ],
  },
  {
    id: 3,
    title: "Modern Music Player",
    description:
      "A sleek and responsive music player web app that allows users to play, pause, and navigate through a playlist with smooth UI interactions.",
    subDescription: [
      "Built using HTML, CSS, and JavaScript for fast performance and lightweight design.",
      "Implemented play/pause, skip, and seek functionalities with real-time progress tracking.",
      "Styled a modern, responsive UI that adapts across devices and screen sizes.",
      "Integrated audio controls and animated feedback to enhance the user experience.",
    ],
    href: "https://taupe-panda-2ceef5.netlify.app/",
    logo: "",
    image: "/assets/projects/musicplayer.png",
    tags: [
      {
        id: 1,
        name: "CSS3",
        path: "/assets/logos/css.png",
      },
      {
        id: 2,
        name: "JS",
        path: "/assets/logos/js.png",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/logos/html.png",
      },
    ],
  },
  {
    id: 4,
    title: "Wanderlust – Hotel Listing & Booking Platform",
    description:
      "A full-stack web application for managing hotel listings, bookings, reviews, and user interactions, inspired by platforms like Airbnb.",
    subDescription: [
      "Built with Node.js, Express.js, EJS, and MongoDB Atlas for a scalable backend architecture.",
      "Integrated Cloudinary for image uploads and Passport.js for secure user authentication.",
      "Implemented CRUD operations for listings and reviews with server-side validation using Joi.",
      "Designed a responsive frontend using Bootstrap, with flash notifications, search filters, and GST-inclusive pricing.",
    ],
    href: "https://wanderlust-eads.onrender.com/listings",
    logo: "",
    image: "/assets/projects/wanderlust.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/express.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/node.png",
      },
    ],
  },
  {
    id: 5,
    title: "WeatherForecast – Real-Time Weather Forecasting App",
    description:
      "A real-time weather application that provides current weather data and forecasts for any location using a clean, intuitive interface.",
    subDescription: [
      "Built with HTML, CSS, and JavaScript on the frontend and Flask (Python) on the backend.",
      "Integrated OpenWeatherMap API to fetch accurate weather data based on user input.",
      "Implemented location-based search with temperature, humidity, wind speed, and weather condition display.",
      "Designed a responsive UI for both desktop and mobile devices, with clear visuals and iconography.",
    ],
    href: "https://weather-app-heja.onrender.com/",
    logo: "",
    image: "/assets/projects/weatherforecast.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html.png",
      },
      {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css.png",
      },
      {
        id: 3,
        name: "JS",
        path: "/assets/logos/js.png",
      },
    ],
  },
  {
    id: 6,
    title: "WEB IDE",
    description:
    "A full-stack browser-based coding environment that allows users to write, run, and preview HTML, CSS, and JavaScript code in real time.",
  subDescription: [
    "Frontend built using React for a dynamic and component-driven interface.",
    "Backend developed with Node.js and Express, leveraging npm libraries for efficient server-side operations.",
    "Implemented live preview feature that instantly reflects HTML, CSS, and JS updates.",
    "Designed an intuitive layout with separate code panes for organized editing and better focus.",
    "(Note: This project can't be hosted but is available on my github)",
  ],
    href: "https://github.com/Hraday04/WEB-IDE",
    logo: "",
    image: "/assets/projects/web-ide.png",

    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/logos/node.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/express.png",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/hraday23/",
    icon: "/assets/socials/leetcode.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hraday-machhi-5a881b291/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Hraday04",
    icon: "/assets/socials/github.webp",
  },
];

export const experiences = [
  {
    title: "Back-End Developer",
    job: "@ZAVX",
    date: "April-2025",
    contents: [
        "Integrated RESTful APIs using Postman for testing, debugging, and documentation.",
       "Developed new application modules to support scalable feature expansion and maintainability.",
        "Streamlined data flow between front-end and back-end systems, improving performance and reliability.",
        "Collaborated with cross-functional teams to implement clean, reusable code following best practices in API development."
    ],
  },
  {
    title: "React native Developer",
    job: "@ZAVX",
    date: "Jun-2025",
    contents: [
        "Actively explored React and React Native to build dynamic, responsive web and mobile interfaces.",
        "Studied component-based architecture, state management, and cross-platform development principles.",
        "Collaborated with team members to understand integration of front-end frameworks with existing APIs.",
        "Demonstrated eagerness to contribute to full-stack projects by bridging front-end and back-end systems."
    ],
  },
// ];
// export const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://robohash.org/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://robohash.org/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://robohash.org/john",
//   },
//   {
//     name: "Alice",
//     username: "@alice",
//     body: "This is hands down the best thing I've experienced. Highly recommend!",
//     img: "https://robohash.org/alice",
//   },
//   {
//     name: "Bob",
//     username: "@bob",
//     body: "Incredible work! The attention to detail is phenomenal.",
//     img: "https://robohash.org/bob",
//   },
//   {
//     name: "Charlie",
//     username: "@charlie",
//     body: "This exceeded all my expectations. Absolutely stunning!",
//     img: "https://robohash.org/charlie",
//   },
//   {
//     name: "Dave",
//     username: "@dave",
//     body: "Simply breathtaking. The best decision I've made in a while.",
//     img: "https://robohash.org/dave",
//   },
//   {
//     name: "Eve",
//     username: "@eve",
//     body: "So glad I found this. It has changed the game for me.",
//     img: "https://robohash.org/eve",
//   },
];
