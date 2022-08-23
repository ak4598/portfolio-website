import React from "react";
import styles from "../styles/web.module.css";
import * as lib from "../../../assets/LibLogos";
import * as pro from "../../../assets/ProgLogos";
import * as framework from "../../../assets/FrameworkLogos";
import * as other from "../../../assets/OtherLogos";
import { Web as Web_ } from "../../../assets/TechLogos";

const Web = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.gridBox} id="lang">
            <div className={styles.category}>Language</div>
            <div className={styles.gridItem}>
              <img src={pro.Html.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={pro.Css.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={pro.JavaScript.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={pro.TypeScript.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="dl">
            <div className={styles.category}>Framework</div>
            <div className={styles.gridItem}>
              <img src={framework.Nextjs.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={framework.React_.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="da">
            <div className={styles.category}>UI/UX</div>
            <div className={styles.gridItem}>
              <img src={lib.MUI.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={lib.Tailwind.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="cv">
            <div className={styles.category}>Backend</div>
            <div className={styles.gridItem}>
              <img src={framework.Express.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="back">
            <a className={styles.back} href="/skills/engineering">
              <img src={Web_.src} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
