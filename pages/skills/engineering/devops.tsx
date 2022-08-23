import React from "react";
import styles from "../styles/devops.module.css";
import * as lib from "../../../assets/LibLogos";
import * as pro from "../../../assets/ProgLogos";
import * as framework from "../../../assets/FrameworkLogos";
import * as other from "../../../assets/OtherLogos";
import { DevOps as DevOps_ } from "../../../assets/TechLogos";

const DevOps = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.gridBox} id="dl">
            <div className={styles.category}>OS</div>
            <div className={styles.gridItem}>
              <img src={other.Linux.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={other.Git.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="da">
            <div className={styles.category}>Version Control</div>
            <div className={styles.gridItem}>
              <img src={other.Git.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="cv">
            <div className={styles.category}>Microservices</div>
            <div className={styles.gridItem}>
              <img src={other.Docker.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="db">
            <div className={styles.category}>DB</div>
            <div className={styles.gridItem}>
              <img src={other.Redis.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={other.MongoDB.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={other.MySQL.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={other.PostgreSQL.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="back">
            <a className={styles.back} href="/skills/engineering">
              <img src={DevOps_.src} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
