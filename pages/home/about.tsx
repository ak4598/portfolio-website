import React from "react";
import styles from "./styles/about.module.css";

const About = () => {
  return (
    <div className={styles.background}>
      <div className={styles.title}>Please select a character:</div>
      <div className={styles.container}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
};

export default About;
