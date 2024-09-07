"use client";

import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";

import { useRef } from "react";

import styles from "./page.module.css";
import Projects from "@/components/Projects/Projects.jsx";
import Education from "@/components/Education/Education.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Contact from "@/components/Contact/Contact.jsx";

export default function Home() {
  const headerElement = useRef();
  const projectsElement = useRef();
  const educationElement = useRef();
  const skillsElement = useRef();
  const contactElement = useRef();

  const headerBtn = useRef();
  const projectsBtn = useRef();
  const educationBtn = useRef();
  const skillsBtn = useRef();
  const contactBtn = useRef();

  function handleClickScroll(elementId) {
    if (elementId === "header") {
      headerElement.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (elementId === "projects") {
      projectsElement.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (elementId === "education") {
      educationElement.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (elementId === "skills") {
      skillsElement.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (elementId === "contacts") {
      contactElement.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header ref={headerElement} className={styles.header}>
        <Header
          onClickScroll={handleClickScroll}
          ref={{
            headerRef: headerBtn,
            projectRef: projectsBtn,
            educationRef: educationBtn,
            skillsRef: skillsBtn,
            contactRef: contactBtn,
          }}
        />
        <Hero />
      </header>
      <Projects ref={projectsElement} />
      <Education ref={educationElement} />
      <Skills ref={skillsElement} />
      <Contact ref={contactElement} />
    </>
  );
}
