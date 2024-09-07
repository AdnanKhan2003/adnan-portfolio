import Button from "@/components/UI/Button";

import styles from "./ProjectItemBottomContent.module.css";

function ProjectItemBottomContent({ items }) {
  return (
    <>
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
    </>
  );
}

export default ProjectItemBottomContent;
