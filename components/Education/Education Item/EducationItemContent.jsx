import styles from "./EducationItemContent.module.css";

function EducationItemContent({ items, Icon }) {
  return (
    <>
      <div className={`${styles.education_img_container}`}>
        <Icon />
      </div>
      <div className="education_content">
        <h1 className={`${styles.education_title}`}>{items.courseName}</h1>
        <p className={`${styles.education_description}`}>{items.totalYears}</p>
      </div>
    </>
  );
}

export default EducationItemContent;
