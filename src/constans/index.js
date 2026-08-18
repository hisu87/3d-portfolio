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
  mvc,
} from "../assets";

export const technologies = [
  // Front-end
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Next.js 15", icon: nextjs },

  // Back-end & Databases
  { name: "Node JS", icon: nodejs },
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: springboot },

  // Frameworks / Tools / Libraries
  { name: "Three JS", icon: threejs },
  { name: "GitHub", icon: github },
  { name: "Docker", icon: docker },
  { name: "GitHub Copilot", icon: githubcopilot },

  // Cloud & Others
  { name: "Azure", icon: azure },
  { name: "Firebase", icon: firebase },
  { name: "GCP", icon: docker }, 
  { name: "Vercel", icon: reactjs }, 
  { name: "Solana", icon: javascript }, 
];

export const overview = {
  vi: "Tôi là một Full-stack Developer đam mê tối ưu hiệu suất với nền tảng vững chắc về Java (Spring Boot) và JavaScript (Next.js). Tôi chuyên xây dựng các ứng dụng mở rộng có hiệu năng cao và tích hợp các hệ thống phức tạp. Đam mê của tôi nằm ở việc tối ưu hóa kiến trúc hệ thống, viết mã sạch và áp dụng các công nghệ hiện đại để mang lại các sản phẩm phần mềm mạnh mẽ, hướng tới người dùng.",
  en: "I am a performance-focused Full-stack Developer with a strong foundation in Java (Spring Boot) and JavaScript (Next.js). I specialize in building high-performance, scalable applications and integrating complex systems. My passion lies in optimizing system architecture, writing clean code, and leveraging modern technologies to deliver robust, user-centric software products."
};

export const certifications = {
  vi: [
    { name: "Mã sạch (Clean Code)", organization: "Udemy", date: "Tháng 5 2024" },
    { name: "Đổi mới Mô hình Kinh doanh", organization: "Udemy", date: "Tháng 5 2024" },
    { name: "Khóa học Kế hoạch Kinh doanh Toàn diện", organization: "Udemy", date: "Tháng 5 2024" },
  ],
  en: [
    { name: "Clean Code", organization: "Udemy", date: "May 2024" },
    { name: "Business Model Innovation", organization: "Udemy", date: "May 2024" },
    { name: "The Complete Business Plan Course", organization: "Udemy", date: "May 2024" },
  ]
};

export const navLinks = {
  vi: [
    { id: "about", title: "Giới thiệu" },
    { id: "work", title: "Dự án" },
    { id: "contact", title: "Liên hệ" },
  ],
  en: [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
  ]
};

export const services = {
  vi: [
    { title: "Lập trình viên Full-stack", icon: web },
    { title: "Lập trình viên Backend", icon: backend },
    { title: "Lập trình viên Web", icon: creator },
    { title: "Kỹ sư tối ưu hiệu suất", icon: mobile },
  ],
  en: [
    { title: "Full-stack Developer", icon: web },
    { title: "Backend Developer", icon: backend },
    { title: "Web Developer", icon: creator },
    { title: "Performance Optimizer", icon: mobile },
  ]
};

export const experiences = {
  vi: [
    {
      title: "System Admin",
      company_name: "MVC",
      icon: mvc,
      iconBg: "#383E56",
      date: "Tháng 6 2025 - Tháng 6 2026",
      points: [
        "Quản trị và tối ưu hóa hệ thống vận hành nội bộ.",
        "Quản lý máy chủ và khắc phục sự cố hệ thống.",
        "Xây dựng nền tảng tư duy Backend và System Architecture.",
      ],
    },
    {
      title: "Admin Part-time",
      company_name: "MVC",
      icon: mvc,
      iconBg: "#E6DEDD",
      date: "2023 - Tháng 6 2025",
      points: [
        "Hỗ trợ kỹ thuật nền tảng cho người dùng và nội bộ.",
        "Quản lý dữ liệu hệ thống cơ bản.",
      ],
    },
    {
      title: "Thực tập sinh Back-end",
      company_name: "FPT Practice Workshop & Superteam HCM",
      icon: fpt,
      iconBg: "#383E56",
      date: "Tháng 6 2023 - Tháng 8 2023",
      points: [
        "Nghiên cứu và phát triển hệ thống với Solana blockchain.",
        "Tối ưu hóa hiệu năng, tăng tốc độ 10%.",
        "Ứng dụng AI vào quy trình làm việc, giảm 100 giờ R&D nhờ AI.",
      ],
    },
  ],
  en: [
    {
      title: "System Admin",
      company_name: "MVC",
      icon: mvc,
      iconBg: "#383E56",
      date: "June 2025 - June 2026",
      points: [
        "Administered and optimized internal operating systems.",
        "Managed servers and troubleshot system issues.",
        "Built a solid foundation for Backend and System Architecture thinking.",
      ],
    },
    {
      title: "Part-time Admin",
      company_name: "MVC",
      icon: mvc,
      iconBg: "#E6DEDD",
      date: "2023 - June 2025",
      points: [
        "Provided technical platform support for users and internal staff.",
        "Managed basic system data.",
      ],
    },
    {
      title: "Back-end Developer Intern",
      company_name: "FPT Practice Workshop & Superteam HCM",
      icon: fpt,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Researched and developed systems using Solana blockchain.",
        "Optimized performance, increasing speed by 10%.",
        "Applied AI to workflows, reducing R&D by 100 hours.",
      ],
    },
  ]
};

export const projects = {
  vi: [
    {
      name: "LunchMate AI",
      description: "Ứng dụng web xây dựng bằng Next.js, TypeScript và Firebase, tích hợp AI để đưa ra các gợi ý ăn trưa thông minh và quản lý sở thích người dùng.",
      tags: [ { name: "next.js", color: "blue-text-gradient" }, { name: "firebase", color: "orange-text-gradient" }, { name: "AI", color: "green-text-gradient" } ],
      image: webdev,
      source_code_link: "https://github.com/hisu87/lunchmate-ai",
    },
    {
      name: "LinkHub87",
      description: "Nền tảng quản lý liên kết hiện đại. Tối ưu hóa hiệu năng với Tốc độ tải < 400ms, Cache Hit Rate 92% và giảm 95% chi phí query.",
      tags: [ { name: "next.js 15", color: "blue-text-gradient" }, { name: "react", color: "green-text-gradient" }, { name: "firebase", color: "orange-text-gradient" } ],
      image: linkhub87,
      source_code_link: "https://github.com/hisu87/linkhub87",
    },
    {
      name: "3D Portfolio",
      description: "Website hồ sơ năng lực 3D hiển thị kỹ năng và dự án sử dụng Three.js và React.",
      tags: [ { name: "react", color: "blue-text-gradient" }, { name: "threejs", color: "green-text-gradient" }, { name: "tailwind", color: "pink-text-gradient" } ],
      image: portfolio,
      source_code_link: "https://github.com/hisu87/3d-portfolio.git",
    },
    {
      name: "Ecommerce Fragnant Store",
      description: "Website thương mại điện tử bán nước hoa với trang quản trị quản lý sản phẩm, doanh thu, nhân viên.",
      tags: [ { name: "JSP", color: "blue-text-gradient" }, { name: "Java", color: "orange-text-gradient" }, { name: "MS SQL Server", color: "yellow-text-gradient" } ],
      image: perfumeproject,
      source_code_link: "https://github.com/hisu87/webTMDT",
    },
    {
      name: "Spotify Clone",
      description: "Bản sao Spotify cho phép tìm kiếm bài hát, tạo danh sách phát, nghe nhạc, tải nhạc và ảnh sử dụng Supabase và Stripe.",
      tags: [ { name: "react", color: "blue-text-gradient" }, { name: "supabase", color: "green-text-gradient" }, { name: "stripe", color: "pink-text-gradient" } ],
      image: spotifyclone,
      source_code_link: "https://github.com/hisu87/spotify-clone",
    },
    {
      name: "Coffee Shop Management",
      description: "Ứng dụng desktop quản lý quán cà phê. Nhấn mạnh mẫu Java DAO, giao diện Java Swing và CSDL MS SQL Server. Lãnh đạo nhóm 6 thành viên.",
      tags: [ { name: "Java Swing", color: "blue-text-gradient" }, { name: "Java DAO", color: "green-text-gradient" }, { name: "MS SQL Server", color: "pink-text-gradient" } ],
      image: java,
      source_code_link: "https://github.com/hisu87/coffee-shop-management",
    },
  ],
  en: [
    {
      name: "LunchMate AI",
      description: "A web application built with Next.js, TypeScript, and Firebase integrating AI to provide smart lunch recommendations and manage user preferences.",
      tags: [ { name: "next.js", color: "blue-text-gradient" }, { name: "firebase", color: "orange-text-gradient" }, { name: "AI", color: "green-text-gradient" } ],
      image: webdev,
      source_code_link: "https://github.com/hisu87/lunchmate-ai",
    },
    {
      name: "LinkHub87",
      description: "A modern link management platform. Optimized for performance with Load Speed < 400ms, Cache Hit Rate 92%, and 95% query cost reduction.",
      tags: [ { name: "next.js 15", color: "blue-text-gradient" }, { name: "react", color: "green-text-gradient" }, { name: "firebase", color: "orange-text-gradient" } ],
      image: linkhub87,
      source_code_link: "https://github.com/hisu87/linkhub87",
    },
    {
      name: "3D Portfolio",
      description: "A 3D portfolio website that showcases my skills and projects using Three.js and React.",
      tags: [ { name: "react", color: "blue-text-gradient" }, { name: "threejs", color: "green-text-gradient" }, { name: "tailwind", color: "pink-text-gradient" } ],
      image: portfolio,
      source_code_link: "https://github.com/hisu87/3d-portfolio.git",
    },
    {
      name: "Ecommerce Fragnant Store",
      description: "An e-commerce website for selling fragrances utilizing MVC Architecture, JSP, and Firebase API, with an admin page to manage products.",
      tags: [ { name: "JSP", color: "blue-text-gradient" }, { name: "Java", color: "orange-text-gradient" }, { name: "MS SQL Server", color: "yellow-text-gradient" } ],
      image: perfumeproject,
      source_code_link: "https://github.com/hisu87/webTMDT",
    },
    {
      name: "Spotify Clone",
      description: "A Spotify clone that allows users to search for songs, create playlists, and play music, upload songs and img using supabase for data.",
      tags: [ { name: "react", color: "blue-text-gradient" }, { name: "supabase", color: "green-text-gradient" }, { name: "stripe", color: "pink-text-gradient" } ],
      image: spotifyclone,
      source_code_link: "https://github.com/hisu87/spotify-clone",
    },
    {
      name: "Coffee Shop Management",
      description: "A desktop application for coffee shop management. Emphasized Java DAO pattern, Java Swing UI, and MS SQL Server database. Led a team of 6.",
      tags: [ { name: "Java Swing", color: "blue-text-gradient" }, { name: "Java DAO", color: "green-text-gradient" }, { name: "MS SQL Server", color: "pink-text-gradient" } ],
      image: java,
      source_code_link: "https://github.com/hisu87/coffee-shop-management",
    },
  ]
};

export const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
