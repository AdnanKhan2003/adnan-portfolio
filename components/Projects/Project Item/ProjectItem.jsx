"use client";

import { motion } from "framer-motion";

import styles from "./ProjectIem.module.css";
import ProjectItemUpperContent from "./ProjectItemUpperContent";
import ProjectItemBottomContent from "./ProjectItemBottomContent";

function ProjectItem({ items }) {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.6 }}
      className={`${styles.project_item}`}
    >
      <ProjectItemUpperContent items={items} />
      <ProjectItemBottomContent items={items} />
    </motion.article>
  );
}

export default ProjectItem;
