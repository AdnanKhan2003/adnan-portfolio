"use client";

import { forwardRef } from "react";
import Link from "next/link";

import styles from "./Button.module.css";

function Button(
  { children, size, theme, navigateto, text, classes = "", ...props },
  ref
) {
  let classCSS = styles.button;
  console.log(classes);

  if (size) {
    let classSize = `button_${size}`;
    classCSS += ` ${styles[classSize]}`;
  }

  if (theme) {
    let classTheme = `button_${theme}`;
    classCSS += ` ${styles[classTheme]}`;
  }

  if (text) {
    classCSS += ` ${styles[text]} `;
  }

  return (
    <button ref={ref} {...props} className={`${classCSS} ${styles[classes]}`}>
      <Link href={navigateto || ""}>{children}</Link>
    </button>
  );
}

export default forwardRef(Button);
