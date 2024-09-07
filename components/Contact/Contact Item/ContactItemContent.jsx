import Image from "next/image";
import Link from "next/link";

import styles from "./ContactItemContent.module.css";

function ContactItemContent({ items }) {
  return (
    <Link href={items.link || ""}>
      <p className={`${styles.contact_icon_container}`}>
        <Image src={items.Icon} alt={items.title} />
      </p>
      <p>{items.title}</p>
    </Link>
  );
}

export default ContactItemContent;
