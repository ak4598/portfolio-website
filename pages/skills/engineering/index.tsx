import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/engineering.module.css";
import { AI, Blockchain, Web, DevOps } from "../../../assets/TechLogos";

const Engineering: NextPage = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        I am an A.I. Engineer, with some knowledge of Blockchain and Web
        Development. <br />
        Of course, having a bit of DevOps knowledge is always appreciated.
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <div className={styles.content}>
            <img src={AI.src} />
            <h2>Artificial Intelligence</h2>
            <p>
              Extensive knowledge of the end-to-end delivery on solutions in
              both CV and NLP.
            </p>
            <Link href="/skills/engineering/ai">
              <button>My Tech Stack</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <div className={styles.content}>
            <img src={Blockchain.src} />
            <h2>Blockchain</h2>
            <p>
              Knowledge of both public chain and private chain. Blockchain is
              more than cryptocurrency.
            </p>
            <Link href="/skills/engineering/blockchain">
              <button>My Tech Stack</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <div className={styles.content}>
            <img src={Web.src} />
            <h2>Web Development</h2>
            <p>
              JavaScript is everywhere now. Building websites is just a way for
              me to survive as an engineer :{"("}
            </p>
            <Link href="/skills/engineering/web">
              <button>My Tech Stack</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <div className={styles.content}>
            <img src={DevOps.src} />
            <h2>DevOps</h2>
            <p>
              Experienced in containerizing applications. And yes, I know
              regular expression :{")"}
            </p>
            <Link href="/skills/engineering/devops">
              <button>My Tech Stack</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
