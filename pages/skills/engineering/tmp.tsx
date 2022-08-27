import React from "react";
import styles from "../styles/tmp.module.css";
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
              Extensive knowledge of the end-to-end delivery of solutions in
              object tracking and natural language processing.
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
              provident quas explicabo iure, reiciendis voluptatem ipsum
              quibusdam illo repellendus harum distinctio incidunt sint?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae, itaque asperiores deleniti tempore fugit inventore
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae, itaque asperiores deleniti tempore fugit inventore
              provident quas explicabo iure, reiciendis voluptatem ipsum
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
