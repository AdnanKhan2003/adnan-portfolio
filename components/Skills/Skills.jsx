"use client";

import { AnimatePresence, motion } from "framer-motion";

import SkillsItem from "./Skills Item/SkillsItem";
import styles from "./Skills.module.css";
import Image from "next/image";

import IconHtml from "@/img/HTML.png";
import IconCss from "@/img/CSS.png";
import IconBootstrap from "@/img/Bootstrap.png";
import IconTailwind from "@/img/TailwindCSS.png";
import IconMaterialUI from "@/img/MaterialUI.png";
import IconJavascript from "@/img/JS.png";
import IconReact from "@/img/React.png";
import IconNext from "@/img/Next.png";
import IconTypescript from "@/img/TypeScript.png";
import IconJest from "@/img/Jest.png";
import IconRts from "@/img/rts.png";
import IconRouter from "@/img/router.png";
import IconQuery from "@/img/query.png";
import IconGit from "@/img/Git.png";
import IconGitHub from "@/img/GitHub.png";
import IconC from "@/img/C.png";
import IconRedux from "@/img/redux.png";

const MY_SKILLS = [
  {
    id: "s1",
    skillName: "Next.js",
    Icon: IconNext,
  },
  {
    id: "s2",
    skillName: "TypeScript",
    Icon: IconTypescript,
  },
  {
    id: "s3",
    skillName: "React.js",
    Icon: IconReact,
  },
  {
    id: "s4",
    skillName: "JavaScript",
    Icon: IconJavascript,
  },
  {
    id: "s5",
    skillName: "C",
    Icon: IconC,
  },
  {
    id: "s5",
    skillName: "Jest",
    Icon: IconJest,
  },
  {
    id: "s6",
    skillName: "React Testing Library",
    Icon: IconRts,
  },
  {
    id: "s7",
    skillName: "Redux",
    Icon: IconRedux,
  },
  {
    id: "s8",
    skillName: "React Router",
    Icon: IconRouter,
  },
  {
    id: "s9",
    skillName: "React Query",
    Icon: IconQuery,
  },
  {
    id: "s10",
    skillName: "Material UI",
    Icon: IconMaterialUI,
  },
  {
    id: "s11",
    skillName: "Tailwind",
    Icon: IconTailwind,
  },
  {
    id: "s12",
    skillName: "Bootstrap",
    Icon: IconBootstrap,
  },
  {
    id: "s13",
    skillName: "CSS",
    Icon: IconCss,
  },
  {
    id: "s14",
    skillName: "HTML",
    Icon: IconHtml,
  },
  {
    id: "s15",
    skillName: "Git",
    Icon: IconGit,
  },
  {
    id: "s16",
    skillName: "GitHub",
    Icon: IconGitHub,
  },
];

function Skills() {
  return (
    <section className={`section`}>
      <motion.h1
        initial={{ x: -191, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.6 }}
        className={`section_title`}
      >
        Skills
      </motion.h1>

      <ul className={`${styles.skills} container`}>
        <AnimatePresence>
          {MY_SKILLS.map((skill) => (
            <SkillsItem key={skill.id} items={skill} Icon={IconHtml} />
          ))}
        </AnimatePresence>
      </ul>
      {/* <SkillsItem /> */}
    </section>
  );
}

export default Skills;
