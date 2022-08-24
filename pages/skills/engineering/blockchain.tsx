import React from "react";
import styles from "../styles/blockchain.module.css";
import * as lib from "../../../assets/LibLogos";
import * as pro from "../../../assets/ProgLogos";
import * as framework from "../../../assets/FrameworkLogos";
import * as other from "../../../assets/OtherLogos";
import { Blockchain as Blockchain_ } from "../../../assets/TechLogos";

const Blockchain = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.gridBox} id="lang">
            <div className={styles.category}>Language</div>
            <div className={styles.gridItem}>
              <img src={pro.Solidity.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="fw">
            <div className={styles.category}>Framework</div>
            <div className={styles.gridItem}>
              <img src={framework.Hardhat.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={framework.Hyperledger.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="pc">
            <div className={styles.category}>Protocol</div>
            <div className={styles.gridItem}>
              <img src={other.Moralis.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={other.TheGraph.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="back">
            <a className={styles.back} href="/skills/engineering">
              <img src={Blockchain_.src} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
