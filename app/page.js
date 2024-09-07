"use client";

import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { navToggleActions } from "@/lib/features/navSlice";
import { stickyNavActions } from "@/lib/features/stickynavSlice.js";

import styles from "./page.module.css";
import Projects from "@/components/Projects/Projects.jsx";
import Education from "@/components/Education/Education.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Contact from "@/components/Contact/Contact.jsx";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(stickyNavActions);
    const navHeight = navElement.current.getBoundingClientRect().height;
    const navSticky = (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        dispatch(stickyNavActions.removeStickyNav());
        headerBtn.current.classList.remove("text_dark");
        projectsBtn.current.classList.remove("text_dark");
        educationBtn.current.classList.remove("text_dark");
        skillsBtn.current.classList.remove("text_dark");
        contactBtn.current.classList.remove("text_dark");
        resumeBtn.current.classList.remove("text_dark");
      } else {
        dispatch(stickyNavActions.addStickyNav());
        headerBtn.current.classList.add("text_dark");
        projectsBtn.current.classList.add("text_dark");
        educationBtn.current.classList.add("text_dark");
        skillsBtn.current.classList.add("text_dark");
        contactBtn.current.classList.add("text_dark");
        resumeBtn.current.classList.add("text_dark");
      }
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    const observer = new IntersectionObserver(navSticky, options);
    observer.observe(headerElement.current);
  }, []);

  // Elements
  const headerElement = useRef();
  const projectsElement = useRef();
  const educationElement = useRef();
  const skillsElement = useRef();
  const contactElement = useRef();
  const navElement = useRef();

  // Buttons
  const headerBtn = useRef();
  const projectsBtn = useRef();
  const educationBtn = useRef();
  const skillsBtn = useRef();
  const contactBtn = useRef();
  const resumeBtn = useRef();

  function handleClickToScroll(element, id) {
    element.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(navToggleActions.handleCloseNav());
  }

  function handleClickScroll(elementId) {
    if (elementId === "header") {
      handleClickToScroll(headerElement);
    }
    if (elementId === "projects") {
      handleClickToScroll(projectsElement);
    }
    if (elementId === "education") {
      handleClickToScroll(educationElement);
    }
    if (elementId === "skills") {
      handleClickToScroll(skillsElement);
    }
    if (elementId === "contacts") {
      handleClickToScroll(contactElement);
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
            navRef: navElement,
            resumeRef: resumeBtn,
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
