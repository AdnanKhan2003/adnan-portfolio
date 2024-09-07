import { motion } from "framer-motion";
import SkillsItemContent from "./SkillsItemContent";

import styles from "./SkillsItem.module.css";

function SkillsItem({ Icon, items }) {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      className={styles.skill_item}
    >
      <SkillsItemContent Icon={Icon} items={items} />
    </motion.article>
  );
}

export default SkillsItem;
