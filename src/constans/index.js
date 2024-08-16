/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  springboot,
  webdev,
  spotify,
  java,
  portfolio
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
    title: "Java Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development With Java",
    company_name: "Studying at FPT PolyTechic",
    icon: springboot,
    iconBg: "#383E56",
    date: "From August 2022",
    points: [
      "Software architecture and design skills.",
      "Basic Java Programming Skills.",
      "Teamwork skill.",
      "etc..."
    ],
  },
  {
    title: "Web Developer With ReactJS and Other Technologies",
    company_name: "Self Study",
    icon: webdev,
    iconBg: "#383E56",
    date: "From August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "3D Portfolio",
    description:
      "A 3D portfolio website that showcases my skills and projects using Three.js and React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/hisu87/3d-portfolio.git",
  },
  {
    name: "Spotify Clone",
    description:
      "A Spotify clone that allows users to search for songs, create playlists, and play music, upload songs and img using supabase for data, and stripe for subsciption.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/hisu87/spotify-clone.git",
  },
  {
    name: "Java",
    description:
      "A Simpkle Student Management System using Java can read and write data to file.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
    ],
    image: java,
    source_code_link: "https://github.com/hisu87/PS33100-PhamVanHieu-Assignment-Java2",
  },
  {
    name: "Ecommerce Fragnant Store",
    description:
      "An ecommerce website for selling fragnant with admin page to management product, revenuew, employee.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      }, {
        name: "Servlet",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "MS SQL Server",
        color: "yellow-text-gradient",
      },
    ],
    image: java,
    source_code_link: "https://github.com/hisu87/webTMDT",
  },
  {
    name: "Ecommerce Store",
    description:
      "An ecommerce website for selling fragnant with admin page to management product, revenuew, employee",
    tags: [
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      }, {
        name: "Thymeleaf",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "MS SQL Server",
        color: "yellow-text-gradient",
      },
    ],
    image: java,
    source_code_link: "https://github.com/hisu87/SOF306-Java6-ASM",
  },
];

export { services, technologies, experiences, testimonials, projects };