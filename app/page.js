import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

import styles from "./page.module.css";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

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
