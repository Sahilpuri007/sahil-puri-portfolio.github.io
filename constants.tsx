
import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  name: "Sahil Puri",
  title: "Lead Engineer @ Samsung | Android Specialist",
  bio: "Software Engineer with 6+ years of experience building scalable, high-impact mobile solutions across consumer electronics, logistics, and hyperlocal platforms. Currently driving core Android features for 200M+ users.",
  skills: [
    { category: "Core Android", items: ["Kotlin", "Java", "AIDL", "SystemUI", "Android SDK", "NDK"] },
    { category: "Architecture", items: ["MVVM", "Clean Architecture", "Performance Optimization", "Scalable Systems"] },
    { category: "Tools & OS", items: ["GitHub", "Bash", "Unix", "Version Control", "Docker"] },
    { category: "AI & Innovation", items: ["Generative AI", "Gemini API", "SmartThings Integration", "IoT"] }
  ],
  experiences: [
    {
      id: "exp1",
      role: "Lead Engineer",
      company: "Samsung R&D Institute India",
      period: "March 2024 - Present",
      description: [
        "Working on core Android features like Media Output and SmartThings used by 200M+ users.",
        "Enabling seamless audio switching, cloud connectivity, and smart device control.",
        "Key contributor to the commercialization of the S25 series flagship smartphones.",
        "Leading system-level development including AIDL and SystemUI enhancements."
      ]
    },
    {
      id: "exp2",
      role: "Software Development Engineer - Android",
      company: "TruckBook",
      period: "July 2022 - March 2024",
      description: [
        "Enhanced user experience for US-based truckers with truck-specific GPS and navigation.",
        "Developed real-time alerts and job search functionalities for a logistics-heavy user base.",
        "Optimized app performance and reliability for long-haul driver requirements."
      ]
    },
    {
      id: "exp3",
      role: "Software Engineer - Android",
      company: "bawiq",
      period: "January 2022 - July 2022",
      description: [
        "Developed grocery delivery solutions for the Malaysian market.",
        "Focused on hyperlocal platform scaling and real-time order tracking."
      ]
    },
    {
      id: "exp4",
      role: "Software Engineer",
      company: "Click Labs",
      period: "February 2019 - January 2022",
      description: [
        "Progressed from Intern to Associate to Software Engineer over 3 years.",
        "Delivered 40+ apps and helped scale platforms like Yelo, Tookan, and Hippo.",
        "Mastered mobile development lifecycle and cross-functional collaboration."
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Samsung Media Output",
      description: "Core Android system feature for seamless audio switching and device control across the Galaxy ecosystem.",
      tags: ["Android Framework", "SystemUI", "Kotlin"],
      link: "#",
      image: "https://images.unsplash.com/photo-1610945415295-d9baf060e871?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p2",
      title: "TruckBook Logistics",
      description: "Navigation and job platform for US trucking industry, featuring truck-specific routing and real-time dispatch.",
      tags: ["GPS", "Real-time", "Android SDK"],
      link: "#",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "p3",
      title: "Hyperlocal Suite (Yelo/Tookan)",
      description: "Contributed to building one of the world's most versatile hyperlocal marketplace and delivery stacks.",
      tags: ["Scalability", "Product Design", "Mobile"],
      link: "#",
      image: "https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&q=80&w=800"
    }
  ],
  education: [
    {
      school: "University Institute of Information and Technology, H.P.U, Shimla",
      degree: "Bachelor of Technology (Hons.), Computer Science",
      period: "August 2015 - June 2019"
    }
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/sahilpuri1",
    github: "https://github.com/sahilpuri",
    email: "sahilpuri699@gmail.com"
  }
};
