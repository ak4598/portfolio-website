import React from "react";
import styles from "./styles/engineering.module.css";
import NeonCards from "../../components/NeonCards/NeonCards";

const Engineering = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <NeonCards />
      </div>
    </div>
  );
};

export default Engineering;
