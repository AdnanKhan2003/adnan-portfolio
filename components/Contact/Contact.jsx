"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

import styles from "./Contact.module.css";
import ContactItem from "./Contact Item/ContactItem";

import logoGmail from "@/img/gmail.png";
import logoLinkedIn from "@/img/linkedin.png";
import logoX from "@/img/x.png";
import logoGithub from "@/img/GitHub.png";

const MY_CONTACTS = [
  {
    id: "c1",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/adnan-khan-3a7aa6228/",
    Icon: logoLinkedIn,
  },
  {
    id: "c2",
    title: "GitHub",
    link: "https://github.com/AdnanKhan2003",
    Icon: logoGithub,
  },
  {
    id: "c3",
    title: "X",
    link: "https://x.com/@AdnanK2003",
    Icon: logoX,
  },
  {
    id: "c4",
    title: "Email",
    Icon: logoGmail,
  },
];

function Contact(props, ref) {
  return (
    <section ref={ref} id="contact" className={`section_spacing`}>
      <motion.h1
        initial={{ x: -191, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.6 }}
        className={`section_title`}
      >
        Contact
      </motion.h1>

      <ul className={`${styles.contacts_container} container`}>
        {MY_CONTACTS.map((contact) => (
          <ContactItem key={contact.id} items={contact} />
        ))}
      </ul>
    </section>
  );
}

export default forwardRef(Contact);
