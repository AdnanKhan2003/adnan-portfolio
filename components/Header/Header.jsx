"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../UI/Button";

import logoImg from "@/img/icon.svg";
import styles from "./Header.module.css";

import { useState, useRef } from "react";

function Header() {
  const open = useRef();
  const close = useRef();
  const navLinks = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const classNav = isOpen ? "nav_link_open" : "nav_link_close";

  function handleOpenNav() {
    setIsOpen(true);
  }
  function handleCloseNav() {
    setIsOpen(false);
  }

  return (
    <nav className={`${styles.nav} container`}>
      <div className={`${styles.nav_left}`}>
        <Image className={`${styles.nav_left_logo}`} src={logoImg} alt="Logo" />
      </div>

      <ul ref={navLinks} className={`${styles.nav_middle} ${styles[classNav]}`}>
        <div onClick={handleCloseNav} ref={close} className={`${styles.close}`}>
          <div className={`${styles.close_line} ${styles.close_line_1}`}></div>
          <div className={`${styles.close_line} ${styles.close_line_2}`}></div>
        </div>
        <Button
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Home
        </Button>
        <Button
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Projects
        </Button>
        <Button
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          Education
        </Button>
        <Button
          size="med"
          text="button_text"
          navigateto=""
          classes={`${styles.nav_middle_list}`}
        >
          About
        </Button>
        <Button
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
          size="med"
          text="button_text"
          navigateto="https://drive.google.com/file/d/1vNRZm60IrIddLwEKGk12y88OzH5TxCKh/view?usp=sharing"
          classes={`${styles.nav_right_btn}`}
        >
          Resume
        </Button>
        <div
          ref={open}
          onClick={handleOpenNav}
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

export default Header;
