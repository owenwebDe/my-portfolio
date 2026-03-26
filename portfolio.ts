import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Michael Adeshina Martins",
  title: "Hi, I'm Michael",
  description:
    "I'm a passionate Backend, Frontend & Blockchain Developer with strong experience building web and mobile applications using JavaScript, TypeScript, React.js, and React Native. I develop cross-platform mobile apps for Android and iOS, build scalable REST APIs, and create decentralized applications on the blockchain. I love turning ideas into clean, functional products and I'm always exploring new technologies to stay ahead.",
  resumeLink: "/CV-Michael-Martins.pdf",
};

export const openSource = {
  githubUserName: "owenwebDe",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:Iconmikky112@gmail.com",
  github: "https://github.com/owenwebDe",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "BACKEND · FRONTEND · BLOCKCHAIN DEVELOPER WHO BUILDS ACROSS THE FULL STACK",
  data: [
    {
      title: "Frontend & Mobile Development",
      lottieAnimationFile: "/img/about-me.png",
      skills: [
        emoji("⚡ Building responsive web apps with React.js & TypeScript"),
        emoji("⚡ Building cross-platform mobile apps for Android & iOS with React Native"),
        emoji("⚡ Integrating third-party and REST APIs into web and mobile apps"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "React.js",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "React Native",
          iconifyTag: "tabler:brand-react-native",
        },
        {
          skillName: "Android",
          iconifyTag: "logos:android-icon",
        },
        {
          skillName: "iOS",
          iconifyTag: "logos:apple",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
    {
      title: "Backend & API Development",
      lottieAnimationFile: "/img/sec.png",
      skills: [
        emoji("⚡ Building scalable REST APIs and server-side applications"),
        emoji("⚡ Integrating and consuming multiple third-party APIs"),
        emoji("⚡ Working with databases and cloud deployment"),
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "vscode-icons:file-type-mongo",
        },
        {
          skillName: "REST API",
          iconifyTag: "mdi:api",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
    {
      title: "Blockchain Development",
      lottieAnimationFile: "/lottie/skills/ethereum.json",
      skills: [
        emoji("⚡ Developing and deploying smart contracts"),
        emoji("⚡ Building decentralized applications (dApps)"),
        emoji("⚡ Integrating blockchain wallets and Web3 APIs"),
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          iconifyTag: "logos:ethereum",
        },
        {
          skillName: "Solidity",
          iconifyTag: "logos:solidity",
        },
        {
          skillName: "Web3.js",
          iconifyTag: "logos:web3js",
        },
        {
          skillName: "MetaMask",
          iconifyTag: "logos:metamask-icon",
        },
        {
          skillName: "Hardhat",
          iconifyTag: "logos:hardhat-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend (React.js / React Native)",
    progressPercentage: "85",
  },
  {
    Stack: "Backend & API Development",
    progressPercentage: "90",
  },
  {
    Stack: "Blockchain & Smart Contracts",
    progressPercentage: "75",
  },
  {
    Stack: "Mobile (Android & iOS)",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Federal University of Technology Minna (FUTMinna)",
    subHeader: "Bachelor of Science in Mathematics",
    duration: "2016 - 2021",
    desc: "Studied Mathematics at one of Nigeria's leading federal universities of technology, building strong analytical and problem-solving skills applied across software development.",
    grade: "",
    descBullets: [],
  },
  {
    schoolName: "Udemy",
    subHeader: "Full Stack Web Development Bootcamp",
    duration: "Online",
    desc: "Completed comprehensive training in modern web development.",
    descBullets: [
      "JavaScript & TypeScript fundamentals to advanced",
      "React.js & Next.js for frontend development",
      "Node.js & REST API development",
    ],
  },
  {
    schoolName: "freeCodeCamp",
    subHeader: "Responsive Web Design & JavaScript Algorithms",
    duration: "Online",
    desc: "Earned certifications in web design and JavaScript programming.",
    descBullets: [
      "Responsive Web Design certification",
      "JavaScript Algorithms and Data Structures",
    ],
  },
  {
    schoolName: "Coursera / Meta",
    subHeader: "React Native — Mobile App Development",
    duration: "Online",
    desc: "Completed professional training in cross-platform mobile development for Android and iOS using React Native.",
    descBullets: [],
  },
  {
    schoolName: "Buildspace / CryptoZombies",
    subHeader: "Blockchain & Smart Contract Development",
    duration: "Online",
    desc: "Trained in Solidity, Ethereum smart contracts, and decentralized application (dApp) development.",
    descBullets: [
      "Smart contract development with Solidity",
      "Building and deploying dApps on Ethereum",
      "Web3.js & wallet integrations",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "CEO & Lead Developer",
    company: "Iconedge Technologies LTD",
    companyLogo: "/img/icons/common/photo_2026-03-26_15-19-18.jpg",
    date: "Present",
    desc: "Founder and CEO of Iconedge Technologies LTD, a technology company based in Abuja, Nigeria. Leading the company's technical direction, building software products, and delivering web, mobile, and blockchain solutions for clients across various industries.",
  },
  {
    role: "Full Stack Developer",
    company: "EquiVault",
    companyLogo: "/img/icons/common/equi.jpg",
    date: "Feb 2026 - Present",
    desc: "Working remotely with a Dubai-based company as a Full Stack Developer, building and maintaining scalable web applications. Responsible for frontend development with React.js and TypeScript, backend API development, and delivering robust features across the full stack.",
  },
  {
    role: "Full Stack Blockchain Developer",
    company: "CribMarket Maricius Limited",
    companyLogo: "/img/icons/common/OIP.webp",
    date: "2025 - Present",
    desc: "Developed full stack web applications with blockchain integration for CribMarket Maricius Limited. Built smart contracts, dApp interfaces, and REST APIs, delivering end-to-end solutions across frontend, backend, and blockchain layers.",
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    companyLogo: "/img/icons/common/github.svg",
    date: "2022 - 2023",
    desc: "Designed and developed full stack web and mobile applications for multiple clients using React.js, React Native, TypeScript, and Node.js. Built and integrated REST APIs, delivered cross-platform Android and iOS apps, and implemented blockchain features including smart contracts and dApp interfaces.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Eatumy Shareholders Admin Panel",
    desc: "A secure admin dashboard built for Eatumy shareholders to manage operations, monitor data, and control platform settings. Access is restricted to authorized users only.",
    link: "https://admin.eatumy.com/",
    image: "/img/adm.jpeg",
  },
  {
    name: "DexNew Token Tracker (Telegram Bot)",
    desc: "A Python-powered Telegram channel that scrapes and tracks new token listings in real time using the DexScreener API. Delivers instant alerts on new crypto token activity.",
    link: "https://t.me/Dexnewtoken",
    image: "/img/Capture.PNG",
  },
  {
    name: "Just Keep Gambling",
    desc: "A full website built for a crypto gambling project, featuring a modern UI, wallet integrations, and an engaging user experience for the Web3 gaming community.",
    link: "https://justkeepgambling.site/",
    image: "/img/just-keep-gambling-web.PNG",
  },
  {
    name: "Pulse Alerts Buy Bot",
    desc: "A Telegram crypto buy alert bot and group management bot that notifies communities of real-time token purchases. Built with Python and blockchain event listeners. (Coming soon)",
    link: "https://t.me/Pulse_AlertsBuyBot",
    image: "/img/pulsebuybot.jpg",
  },
  {
    name: "C-Sons Global Enterprises",
    desc: "A business website for a Nigerian logistics and supply company offering transportation, medical equipment, computers, and office supplies with 24/7 customer support.",
    link: "https://c-sonsglobalenterprises.org/",
    image: "/img/c-and-son.PNG",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Michael Adeshina Martins",
  description: greetings.description,
  author: "Michael Adeshina Martins",
  image: "/img/my-picture-r.png",
  url: "https://owenwebde.vercel.app",
  keywords: [
    "Michael",
    "Michael Martins",
    "Michael Adeshina Martins",
    "Portfolio",
    "Michael Martins Portfolio",
    "Backend Developer",
    "Frontend Developer",
    "Blockchain Developer",
    "React Native Developer",
  ],
};
