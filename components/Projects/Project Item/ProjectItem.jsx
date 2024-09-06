import Link from "next/link";
import Image from "next/image";

import styles from "./ProjectIem.module.css";
import Button from "@/components/UI/Button";

function ProjectItem({ items }) {
  return (
    <article className={`${styles.project_item}`}>
      <div className={`${styles.project_img_container}`}>
        <Image
          className={`${styles.project_item_img}`}
          src={items.image.src}
          alt={items.title}
          width="300"
          height="300"
        />
      </div>
      <div className={`${styles.project_content}`}>
        <h1 className="project_content_title">{items.title}</h1>
        <p className="project_content_description">{items.description}</p>
      </div>
      <div className={`${styles.project_item_btn_container}`}>
        <Button classes="button_dark" size="small" navigateto={items.code}>
          Code
        </Button>
        <Button classes="button_dark" size="small" navigateto={items.link}>
          Live
        </Button>
      </div>
    </article>
  );
}

export default ProjectItem;
