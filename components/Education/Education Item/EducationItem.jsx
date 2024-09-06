import Link from "next/link";
import Image from "next/image";

import styles from "./EducationItem.module.css";

function EducationItem({ items, Icon }) {
  return (
    <article className={`${styles.education_item}`}>
      <div className={`${styles.education_img_container}`}>
        <Icon />
      </div>
      <div className="education_content">
        <h1 className={`${styles.education_title}`}>{items.courseName}</h1>
        <p className={`${styles.education_description}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          provident voluptatem voluptate magnam reprehenderit ratione impedit
          ipsa laborum quidem voluptatibus!
        </p>
      </div>
    </article>
  );
}

export default EducationItem;
