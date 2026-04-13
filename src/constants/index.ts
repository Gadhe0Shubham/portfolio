import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Data Science & ML",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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

const experiences: TExperience[] = [
  {
    title: "DSA & Aptitude Intern",
    companyName: "Talent Battle",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Completed over 10 DSA modules, enhancing proficiency in sorting, searching, and recursion.",
      "Scored 95% in coding assessments simulating real-world tech interviews.",
      "Practiced aptitude and logical reasoning via live test scenarios and analytics review.",
    ],
  },
  {
    title: "Frontend Development Intern",
    companyName: "CIT Internship Studio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - May 2025",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, React.js, and Bootstrap.",
      "Implemented UI/UX designs with full cross-browser compatibility.",
      "Integrated RESTful APIs and optimized frontend performance.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Shubham demonstrated exceptional problem-solving skills and dedication throughout his internship. His DSA proficiency improved remarkably.",
    name: "Talent Battle Team",
    designation: "Mentor",
    company: "Talent Battle",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Outstanding frontend development skills. Shubham delivered responsive, pixel-perfect interfaces and integrated APIs seamlessly.",
    name: "CIT Studio Lead",
    designation: "Technical Lead",
    company: "CIT Internship Studio",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "RAG Chatbot",
    description:
      "AI-Powered Portfolio Analytics Platform - A modern, full-stack application combining React/Next.js frontend with FastAPI backend featuring RAG (Retrieval-Augmented Generation) capabilities for intelligent document analysis and querying.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "rag",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Gadhe0Shubham/rag_chatbot",
  },
  {
    name: "PVG College Chatbot",
    description:
      "AI-Powered College Enquiry Chatbot for Pune Vidyarthi Griha's College of Engineering & SS Dhamankar Institute of Management. Provides instant answers to student queries about admissions, courses, facilities, and campus information.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "chatbot",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Gadhe0Shubham/PVG_Chatbot",
  },
  {
    name: "Prescripto",
    description:
      "Full-stack healthcare appointment platform built with MERN stack. Features role-based dashboards for patients, doctors, and admins with integrated payment processing via Stripe and Razorpay for secure appointment bookings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
