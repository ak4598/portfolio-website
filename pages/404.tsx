import React from "react";
import styles from "./index.module.css";

const Custom404 = () => {
  return (
    <div>
      <div className={styles.mask404}></div>
      <div className={styles.titleOverlay}>
        <div className={styles.title}>404 Not Found&nbsp;</div>
        <div className={styles.subtitle}>
          Please browse through the navigation bar above
        </div>
      </div>
    </div>
  );
};

export default Custom404;
