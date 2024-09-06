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

function Contact() {
  return (
    <section className={`section_spacing`}>
      <h1 className={`section_title`}>Contact</h1>

      <ul className={`${styles.contacts_container} container`}>
        {MY_CONTACTS.map((contact) => (
          <ContactItem key={contact.id} items={contact} />
        ))}
      </ul>
    </section>
  );
}

export default Contact;
