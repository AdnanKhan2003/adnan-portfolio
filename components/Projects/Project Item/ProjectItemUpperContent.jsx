import Image from "next/image";

import styles from "./ProjectItemUpperContent.module.css";

function ProjectItemUpperContent({ items }) {
  return (
    <div className={`${styles.project_img_container}`}>
      <Image
        className={`${styles.project_item_img}`}
        src={items.image.src}
        alt={items.title}
        width="300"
        height="300"
      />
    </div>
  );
}

export default ProjectItemUpperContent;
