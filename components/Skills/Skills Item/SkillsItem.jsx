import Image from "next/image";
import styles from "./SkillsItem.module.css";

function SkillsItem({ Icon, items }) {
  return (
    <article className={styles.skill_item}>
      <div className={`${styles.skill_item_img_container}`}>
        <Image src={items.Icon || Icon} alt={items.skillName} />
      </div>
      <h3 className={styles.skills}>{items.skillName}</h3>
    </article>
  );
}

export default SkillsItem;
