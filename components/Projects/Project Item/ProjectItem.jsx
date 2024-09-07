import Link from "next/link";
import Image from "next/image";

import styles from "./ProjectIem.module.css";
import Button from "@/components/UI/Button";
import ProjectItemUpperContent from "./ProjectItemUpperContent";
import ProjectItemBottomContent from "./ProjectItemBottomContent";

function ProjectItem({ items }) {
  return (
    <article className={`${styles.project_item}`}>
      <ProjectItemUpperContent items={items} />
      <ProjectItemBottomContent items={items} />
    </article>
  );
}

export default ProjectItem;
