import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";
import Button from "../UI/Button";
import HeroImage from "@/components/Hero/HeroImage.jsx";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <div className={`${styles.hero_container}`}>
      <div className="hero_wrapper container">
        <div className={`${styles.hero_content}`}>
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </div>
  );
}

export default Hero;
