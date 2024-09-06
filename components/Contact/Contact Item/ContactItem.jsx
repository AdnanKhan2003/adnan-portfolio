import Image from "next/image";

import styles from "./ContactItem.module.css";
import logo from "@/img/HTML.png";
import Link from "next/link";

function ContactItem({ items, Icon }) {
  return (
    <div className={`${styles.contact_container}`}>
      <div classNmae={`${styles.contact_items}`}>
        <Link href={items.link || ""}>
          <p className={`${styles.contact_icon_container}`}>
            <Image src={items.Icon} />
          </p>
          <p>{items.title}</p>
        </Link>
      </div>
    </div>
  );
}

export default ContactItem;
