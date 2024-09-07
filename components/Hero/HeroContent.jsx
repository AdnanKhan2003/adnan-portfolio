"use client";

import Button from "../UI/Button";

import { motion } from "framer-motion";
import styles from "./HeroContent.module.css";

function HeroContent() {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.6 }}
      className={`${styles.hero_content_text}`}
    >
      <h1 className={`${styles.hero_content_title}`}>Adnan Khan</h1>
      <p className={`${styles.hero_content_description}`}>
        A 19-year-old student enthusiast of web development especially front-end
        development. I am also open to remote work, internships, and
        collaborations so feel free to contact me.
      </p>
      <Button
        navigateTo="https://drive.google.com/file/d/1vNRZm60IrIddLwEKGk12y88OzH5TxCKh/view?usp=sharing"
        size="big"
      >
        Resume
      </Button>
    </motion.div>
  );
}

export default HeroContent;
