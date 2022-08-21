import React from "react";
import styles from "./PopupCards.module.css";
import { AI, Blockchain, Web, DevOps } from "../../assets/TechLogos";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div>
            <img src={AI.src} />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div>
            <img src={Blockchain.src} />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div>
            <img src={Web.src} />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <div>
            <img src={DevOps.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
