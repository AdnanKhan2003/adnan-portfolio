import Image from "next/image";

import styles from "./SkillsItemContent.module.css";

function SkillsItemContent({ Icon, items }) {
  return (
    <>
      <div className={`${styles.skill_item_img_container}`}>
        <Image src={items.Icon || Icon} alt={items.skillName} />
      </div>
      <h3 className={styles.skills}>{items.skillName}</h3>
    </>
  );
}

export default SkillsItemContent;
