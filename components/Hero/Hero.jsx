import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";
import img from "@/img/icon.svg";
import Button from "../UI/Button";

function Hero() {
  return (
    <div className={`${styles.hero_container}`}>
      <div className="hero_wrapper container">
        <div className={`${styles.hero_content}`}>
          <div className={`${styles.hero_content_img_container}`}>
            <Image
              className={`${styles.hero_content_img}`}
              src={img}
              width="23px"
              height="23px"
            />
          </div>
          <div className={`${styles.hero_content_text}`}>
            <h1 className={`${styles.hero_content_title}`}>Adnan Khan</h1>
            <p className={`${styles.hero_content_description}`}>
              A 19-year-old student enthusiast of web development especially
              front-end development. I'm also open to remote work, internships,
              and collaborations so feel free to contact me.
            </p>
            <Button
              navigateTo="https://drive.google.com/file/d/1vNRZm60IrIddLwEKGk12y88OzH5TxCKh/view?usp=sharing"
              size="big"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
