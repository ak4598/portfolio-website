import React from "react";
import styles from "../styles/engineering.module.css";
import { AI, Blockchain, Web, DevOps } from "../../../assets/TechLogos";

const tmp = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        I am an A.I. Engineer, with some knowledge in Blockchain and Web
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
            <a href="/skills/engineering/ai">
              <button>My Tech Stack</button>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.span1}></span>
          <span className={styles.span2}></span>
          <div className={styles.content}>
            <img src={Blockchain.src} />
            <h2>Blockchain</h2>
            <p>
              Knowledge on both public chain and private chain. Blockchain is
              more than cryptocurrency.
            </p>
            <a href="/skills/engineering/blockchain">
              <button>My Tech Stack</button>
            </a>
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
            <a href="/skills/engineering/web">
              <button>My Tech Stack</button>
            </a>
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
            <a href="/skills/engineering/devops">
              <button>My Tech Stack</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tmp;
