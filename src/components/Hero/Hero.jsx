import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Matthew</h1>
        <p className={styles.description}>
          I'm a Web Developer and an Data Analyst with 4 Years of experience.
          Reach out to me for more information.
        </p>
        <a href="mailto:MatthewDadson24@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={require("../../assets/hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
