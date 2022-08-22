import React from "react";
import styles from "./NeonCards.module.css";
import { AI, Blockchain, Web, DevOps } from "../../assets/TechLogos";

const NeonCards = () => {
  return (
    <div className={styles.container}>
      <a className={styles.box} href="/skills/engineering/ai">
        <div className={styles.image}>
          <img src={AI.src} />
        </div>
        <div className={styles.content}>
          <h2>Artificial Intelligence</h2>
        </div>
      </a>
      <a className={styles.box} href="/skills/engineering/blockchain">
        <div className={styles.image}>
          <img src={Blockchain.src} />
        </div>
        <div className={styles.content}>
          <h2>Blockchain</h2>
        </div>
      </a>
      <a className={styles.box} href="/skills/engineering/web">
        <div className={styles.image}>
          <img src={Web.src} />
        </div>
        <div className={styles.content}>
          <h2>Web Development</h2>
        </div>
      </a>
      <a className={styles.box} href="/skills/engineering/devops">
        <div className={styles.image}>
          <img src={DevOps.src} />
        </div>
        <div className={styles.content}>
          <h2>DevOps</h2>
        </div>
      </a>
    </div>
  );
};

export default NeonCards;
