"use client";

import { motion } from "framer-motion";

import styles from "./EducationItem.module.css";
import EducationItemContent from "./EducationItemContent";

function EducationItem({ items, Icon }) {
  return (
    <motion.article
      initial={{ y: 91, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.6 }}
      className={`${styles.education_item}`}
    >
      <EducationItemContent items={items} Icon={Icon} />
    </motion.article>
  );
}

export default EducationItem;
