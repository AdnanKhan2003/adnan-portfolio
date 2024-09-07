"use client";

import ContactItemContent from "./ContactItemContent";

import { motion } from "framer-motion";
import styles from "./ContactItem.module.css";

function ContactItem({ items }) {
  return (
    <motion.div
      initial={{ y: 91, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.6 }}
      className={`${styles.contact_container}`}
    >
      <div classNmae={`${styles.contact_items}`}>
        <ContactItemContent items={items} />
      </div>
    </motion.div>
  );
}

export default ContactItem;
