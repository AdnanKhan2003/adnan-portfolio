"use client";

import EducationItem from "./Education Item/EducationItem";
import SchoolIcon from "@mui/icons-material/School";

import styles from "./Education.module.css";

const MY_EDUCATION = [
  {
    id: "e1",
    courseName: "Bachelor Of Commerce",
    specialization: "Information Technology",
    totalYears: "2021-2024",
  },
  {
    id: "e2",
    courseName: "Master Of Computer Application",
    specialization: "Computer Science",
    totalYears: "2024-2026",
  },
];

function Education() {
  return (
    <section className={`section`}>
      <h1 className={`section_title ${styles.education_title}`}>Education</h1>

      <ul className={`${styles.education} container`}>
        <div className={`${styles.dot} ${styles.dot_1}`}></div>
        <div className={`${styles.dot} ${styles.dot_2}`}></div>
        {MY_EDUCATION.map((education) => (
          <EducationItem
            key={education.id}
            items={education}
            Icon={SchoolIcon}
          />
        ))}
      </ul>
    </section>
  );
}

export default Education;
