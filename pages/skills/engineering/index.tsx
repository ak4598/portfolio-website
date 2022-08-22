import React from "react";
import styles from "../styles/engineering.module.css";
import NeonCards from "../../../components/NeonCards/NeonCards";
import * as lib from "../../../assets/LibLogos";
import * as pro from "../../../assets/ProgLogos";
import * as framework from "../../../assets/FrameworkLogos";
import * as other from "../../../assets/OtherLogos";

const Engineering = () => {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.cards}>
            <NeonCards />
          </div>
          <div className={styles.title}>
            I am an A.I. Engineer, with some knowledge in Blockchain and Web
            Development. <br />
            Of course, a bit of DevOps knowledge is always needed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
