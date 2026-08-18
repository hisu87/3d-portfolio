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
  java,
  github,
  figma,
  docker,
  azure,
  githubcopilot,
  nextjs,
  firebase,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  springboot,
  webdev,
  spotifyclone,
  project2041,
  portfolio,
  perfumeproject,
  storeproject,
  sb,
  linkhub87,
  fpt,
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
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  // Front-end
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
    name: "Next.js 15",
    icon: nextjs,
  },

  // Back-end & Databases
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "Spring Boot",
    icon: springboot,
  },

  // Frameworks / Tools / Libraries
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "GitHub",
    icon: github,
  },

  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "GitHub Copilot",
    icon: githubcopilot,
  },

  // Cloud & Others
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "GCP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    name: "Solana",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
  },
];

const experiences = [
  {
    title: "Back-end Developer Intern",
    company_name: "FPT Practice Workshop & Superteam HCM",
    icon: fpt,
    iconBg: "#383E56",
    date: "Recent",
    points: [
      "Nghiên cứu và phát triển hệ thống với Solana blockchain.",
      "Tối ưu hóa hiệu năng, tăng tốc độ 10%.",
      "Ứng dụng AI vào quy trình làm việc, giảm 100 giờ R&D nhờ AI.",
    ],
  },
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
      "etc...",
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
    name: "LinkHub87",
    description:
      "A modern link management platform. Optimized for performance with Tốc độ tải < 400ms, Cache Hit Rate 92%, and giảm 95% chi phí query.",
    tags: [
      {
        name: "next.js 15",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: linkhub87,
    source_code_link: "https://github.com/hisu87/linkhub87",
  },
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
    name: "Ecommerce Fragnant Store",
    description:
      "An ecommerce website for selling fragnant with admin page to management product, revenuew, employee.",
    tags: [
      {
        name: "JSP",
        color: "blue-text-gradient",
      },
      {
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
    image: perfumeproject,
    source_code_link: "https://github.com/hisu87/webTMDT",
  },
  // {
  //   name: "Project1",
  //   description:
  //     "A sample project that needs further development and documentation updates.",
  //   tags: [],
  //   image: null,
  //   source_code_link: "https://github.com/hisu87/Project1",
  // },
  {
    name: "SOF2041",
    description:
      "A semester project (SOF2041) built in September 2023 demonstrating Java programming concepts and software development practices.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
    ],
    image: project2041,
    source_code_link: "https://github.com/hisu87/SOF2041",
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
    image: spotifyclone,
    source_code_link: "https://github.com/hisu87/spotify-clone",
  },
  {
    name: "Starbucks Clone Remake",
    description:
      "A Starbucks clone with different UI/UX and more creative. By using HTML, CSS and JavaScript. For a new experience.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: sb,
    source_code_link: "https://github.com/hisu87/Web-Starbuck-Clone-Remake",
  },
  {
    name: "Ecommerce Store",
    description:
      "An e-commerce website for selling fragrances with an admin page to manage products, revenue, and employees.",
    tags: [
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "blue-text-gradient",
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
    image: storeproject,
    source_code_link: "https://github.com/hisu87/SOF306-Java6-ASM",
  },
];

export { services, technologies, experiences, testimonials, projects };
