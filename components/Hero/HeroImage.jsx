"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import img from "@/img/icon.svg";
import styles from "./HeroImage.module.css";

function HeroImage() {
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.6 }}
      className={`${styles.hero_content_img_container}`}
    >
      <Image
        priority
        className={`${styles.hero_content_img}`}
        src={img}
        alt="Adnan Khan"
        width="23px"
        height="23px"
      />
    </motion.div>
  );
}

export default HeroImage;
