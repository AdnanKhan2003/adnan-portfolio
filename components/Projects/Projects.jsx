"use client";

import ProjectItem from "./Project Item/ProjectItem";
import styles from "./Project.module.css";

import ProAE from "@/img/Ae.jpeg";
import ProTech from "@/img/TechKareer.jpeg";
import ProPixabay from "@/img/pixabay.jpeg";
import ProBankist from "@/img/Bankist.jpeg";
import ProBL from "@/img/proBootstrap.jpeg";
import ProMapty from "@/img/Mapty.jpeg";
import ProForkify from "@/img/Forkify.jpeg";

import { motion } from "framer-motion";

const MY_PROJECTS = [
  {
    id: "p1",
    title: "Forkify Web",
    description:
      "This is yo 1A Food order web app that allows users to search for recipes, customize ingredient quantities, bookmark their favorite recipes, and create their own dishes.",
    link: "https://forkify-adnank.netlify.app/",
    code: "https://github.com/AdnanKhan2003/Forkify-Project",
    image: ProForkify,
    techstack: ["Vanilla JavaScript", "Parcel", "HTML", "CSS"],
  },
  {
    id: "p2",
    title: "TechKareer Jobs",
    description:
      "This repository contains code for the 'Job Portal' web app that I created for grabbing an internship",
    link: "https://adnan-job-board-assignment.netlify.app/",
    code: "https://github.com/AdnanKhan2003/Internship-assignment",
    image: ProTech,
    techstack: ["React", "React Router", "JavaScript", "CSS Modules", "HTML"],
  },
  {
    id: "p3",
    title: "Pixabay",
    description:
      "A Photo Gallery Web app that allows users to search for and download high-quality photos. It features a 'click to load more' functionality, allowing for seamless exploration of additional images",
    link: "https://adnankhan2003.github.io/Image-Gallery-Web-App/",
    code: "https://github.com/AdnanKhan2003/Image-Gallery",
    image: ProPixabay,
    techstack: ["Vanilla JavaScript", "CSS", "HTML"],
  },
  {
    id: "p4",
    title: "Bankist",
    description:
      "A Bank website which allows users to take loan, transfer money, receive money, login feature and delete account feature ",
    link: "https://adnankhan2003.github.io/Banker-Project/",
    code: "https://github.com/AdnanKhan2003/Banker-Project",
    image: ProBankist,
    techstack: ["Vanilla JavaScript", "CSS", "HTML"],
  },
  {
    id: "p5",
    title: "My Bootstrap Learnings",
    description:
      "All the things that I've learned so far in Bootstrap, is systematically documented here.",
    link: "https://adnankhan2003.github.io/My-Bootstrap-Learnings/",
    code: "https://github.com/AdnanKhan2003/My-Bootstrap-Learnings",
    image: ProBL,
    techstack: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: "p6",
    title: "Mapty",
    description:
      "A workout tracker app called Mapty which enables users to select workout locations on a map and log their activities, including cycling and walking. The app provides a visual overview of workouts and their locations, helping users track their fitness progress.",
    link: "https://mapty-workout-web-app.netlify.app/",
    code: "https://github.com/AdnanKhan2003/Mapty",
    image: ProMapty,
    techstack: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: "p7",
    title: "Arman Enterprises",
    description:
      "I created a website for my father's contracting business using vanilla JavaScript, showcasing our services, customer testimonials, and a contact page for inquiries and deals. The site aims to enhance customer engagement and streamline communication.",
    link: "https://adnankhan2003.github.io/Arman-Enterprises/",
    code: "https://github.com/AdnanKhan2003/Arman-Enterprises",
    image: ProAE,
    techstack: ["JavaScript", "CSS", "HTML"],
  },
];

function Projects() {
  return (
    <section id="projects" className={`section`}>
      <motion.h1
        initial={{ x: -191, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.6 }}
        className={`section_title`}
      >
        Projects
      </motion.h1>

      <ul className={`${styles.projects} container`}>
        {MY_PROJECTS.map((project) => (
          <ProjectItem key={project.id} items={project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
