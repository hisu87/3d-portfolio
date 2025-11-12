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
  portfolio,
  perfumeproject,
  storeproject,
  sb,
  linkhub87,
  project2041,
  fpt,
  mvc,
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
    name: "Next.js",
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

  // Cloud
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Software Development With Java",
    company_name: "Studying at FPT Polytechnic",
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
  {
    title: "Software Development With Java",
    company_name: "Studying at FPT Polytechnic",
    icon: springboot, // Thay thế bằng biến icon Spring Boot/Java của bạn
    iconBg: "#383E56",
    date: "From August 2022", // Giữ ngày tháng từ ví dụ của bạn
    points: [
      "Xây dựng hệ thống Quản lý Sinh viên bằng Java core, bao gồm đọc và ghi dữ liệu từ tệp.",
      "Phát triển website thương mại điện tử (Ecommerce Fragnant Store) sử dụng JSP, Servlet, Java và MS SQL Server.",
      "Tạo một trang web thương mại điện tử khác (Ecommerce Store) với Spring Boot, Thymeleaf và MS SQL Server.",
      "Hoàn thành dự án mẫu (SOF2041) bằng Java, củng cố kỹ năng lập trình và làm việc nhóm.",
    ],
  },
  {
    title: "Admin Part-time",
    company_name: "MVC NETWORK",
    icon: mvc,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - June 2025",
    points: [
      "Managed administrative tasks and supported daily operations.",
      "Coordinated communication between departments to ensure smooth workflow.",
      "Maintained accurate records and handled confidential information with discretion.",
      "Handled customer inquiries and provided excellent service.",
    ],
  },
  {
    title: "Full-Stack Web Development",
    company_name: "Personal Projects",
    icon: nextjs, // Thay thế bằng biến icon React/Next.js của bạn
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Phát triển 'LinkHub87', một nền tảng quản lý liên kết hiệu suất cao sử dụng Next.js, React, Firebase và Tailwind CSS.",
      "Xây dựng 'Spotify Clone' với React, tích hợp Supabase cho cơ sở dữ liệu và Stripe cho hệ thống thanh toán.",
      "Tạo một portfolio 3D tương tác bằng React, Three.js và Tailwind để giới thiệu các dự án.",
      "Thiết kế 'Starbucks Clone Remake' sử dụng HTML, CSS và JavaScript để thể hiện kỹ năng UI/UX.",
    ],
  },
  {
    title: " Graduate",
    company_name: "FPT Polytechnic",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "February 2025",
    points: [
      "Diploma - Major: Software Development",
      "GPA: 3.55/4.0",
      "Graduation Rank: Excellent",
      "Participated in technical workshops and hackathons to sharpen programming and analytical abilities.",
      "Effectively balanced studies with active participation in social and extracurricular activities.",
      "Engaged in social work and volunteer initiatives, including organizing charity events, community support programs, and student mentoring.",
    ],
  },
  {
    title: "Admin System",
    company_name: "MVC NETWORK",
    icon: mvc,
    iconBg: "#E6DEDD",
    date: "July 2025 - Present",
    points: [
      "Manege and makesure the system works well, support take care part-time employees.",
      "Collaborate with other teams to handle and resolve customer issues.",
      "Optimize administrative processes to improve efficiency and accuracy.",
      "Generate reports and analyze data to support decision-making processes.",
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
      "Một nền tảng quản lý liên kết hiện đại, hiệu suất cao với phân tích nâng cao, theo dõi thời gian thực và bộ đệm thông minh.",
    tags: [
      {
        name: "next.js",
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

  {
    name: "SOF2041",
    description:
      " Đây là một dự án ứng dụng desktop được xây dựng bằng Java Swing, SQL Server, thể hiện các kỹ năng và kiến thức cốt lõi của môn học.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
    ],
    image: project2041, // Cần thay thế bằng biến hình ảnh của bạn
    source_code_link: "https://github.com/hisu87/SOF2041",
  },
  // {
  //   name: "Spotify Clone",
  //   description:
  //     "A Spotify clone that allows users to search for songs, create playlists, and play music, upload songs and img using supabase for data, and stripe for subsciption.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "stripe",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: spotifyclone,
  //   source_code_link: "https://github.com/hisu87/spotify-clone",
  // },
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
      "An ecommerce website for selling fragnant with admin page to management product, revenuew, employee",
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
    image: storeproject, // Cần thay thế bằng biến hình ảnh của bạn
    source_code_link: "https://github.com/hisu87/SOF306-Java6-ASM",
  },
];

export { services, technologies, experiences, testimonials, projects };
