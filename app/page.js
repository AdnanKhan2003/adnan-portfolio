import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";

import styles from "./page.module.css";
import Projects from "@/components/Projects/Projects.jsx";
import Education from "@/components/Education/Education.jsx";
import Skills from "@/components/Skills/Skills.jsx";
import Contact from "@/components/Contact/Contact.jsx";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Header />
        <Hero />
      </header>
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
