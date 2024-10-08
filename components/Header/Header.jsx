"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../UI/Button";

import { useSelector, useDispatch } from "react-redux";
import { navToggleActions } from "@/lib/features/navSlice.js";

import logoImg from "@/img/icon.svg";
import styles from "./Header.module.css";

import { useRef, forwardRef } from "react";

function Header({ onClickScroll }, ref) {
  const {
    headerRef,
    projectRef,
    educationRef,
    skillsRef,
    contactRef,
    navRef,
    resumeRef,
  } = ref;
  const dispatch = useDispatch();
  const navOpen = useRef();
  const navClose = useRef();
  const navLinks = useRef();
  const { handleOpenNav, handleCloseNav } = navToggleActions;

  const isOpen = useSelector((state) => state.navToggle.isOpen);
  const heroIsVisible = useSelector((state) => state.stickyNav.heroIsVisible);

  // const [isOpen, setIsOpen] = useState(false);
  const classNav = isOpen ? "nav_link_open" : "nav_link_close";

  function handleOpenNavbar() {
    dispatch(handleOpenNav());
  }
  function handleCloseNavbar() {
    dispatch(handleCloseNav());
  }

  return (
    <nav
      ref={navRef}
      className={`${
        heroIsVisible ? `${styles.nav} container` : "sticky background"
      } `}
    >
      {console.log(heroIsVisible)}
      <div className={`${styles.nav_left}`}>
        <Image className={`${styles.nav_left_logo}`} src={logoImg} alt="Logo" />
      </div>

      <ul ref={navLinks} className={`${styles.nav_middle} ${styles[classNav]}`}>
        <div
          onClick={handleCloseNavbar}
          ref={navClose}
          className={`${styles.close}`}
        >
          <div className={`${styles.close_line} ${styles.close_line_1}`}></div>
          <div className={`${styles.close_line} ${styles.close_line_2}`}></div>
        </div>
        <Button
          onClick={() => onClickScroll("header")}
          ref={headerRef}
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Home
        </Button>
        <Button
          onClick={() => onClickScroll("projects")}
          ref={projectRef}
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Projects
        </Button>
        <Button
          onClick={() => onClickScroll("education")}
          ref={educationRef}
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Education
        </Button>
        <Button
          onClick={() => onClickScroll("skills")}
          ref={skillsRef}
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Skills
        </Button>
        <Button
          onClick={() => onClickScroll("contacts")}
          ref={contactRef}
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list} text_dark`}
        >
          Contact
        </Button>
      </ul>

      <div className={`${styles.nav_right}`}>
        <Button
          ref={resumeRef}
          size="med"
          text="button_text"
          navigateto="https://drive.google.com/file/d/1vNRZm60IrIddLwEKGk12y88OzH5TxCKh/view?usp=sharing"
          classes={`${styles.nav_right_btn}`}
        >
          Resume
        </Button>
        <div
          ref={navOpen}
          onClick={handleOpenNavbar}
          className={styles.line_container}
        >
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default forwardRef(Header);
