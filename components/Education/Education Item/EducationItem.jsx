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
        <p className={`${styles.education_description}`}>{items.totalYears}</p>
      </div>
    </article>
  );
}

export default EducationItem;
