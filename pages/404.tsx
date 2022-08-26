import React from "react";
import styles from "./index.module.css";

const Custom404 = () => {
  return (
    <div>
      <div className={styles.mask404}></div>
      <div className={styles.titleOverlay}>
        <div className={styles.title}>404 Error</div>
        <div className={styles.subtitle}>
          Please browse through the navigation bar above
        </div>
        <div className={styles.subtitleSmall}>
          Please browse through the menu above
        </div>
      </div>
    </div>
  );
};

export default Custom404;
