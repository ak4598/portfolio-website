import React from "react";
import styles from "./styles/engineering.module.css";
import NeonCards from "../../components/NeonCards/NeonCards";

const Engineering = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.cards}>
          <NeonCards />
        </div>
        <div className={styles.title}>
          I am an A.I. Engineer, with some knowledge on Blockchain and Web
          Development. <br />
          Of course, a bit of DevOps knowledge is always needed.
        </div>
      </div>
      <div className={styles.background2}></div>
    </div>
  );
};

export default Engineering;
