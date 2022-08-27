import React from "react";
import styles from "../styles/tmp.module.css";

const tmp = () => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        I am an A.I. Engineer, with some knowledge in Blockchain and Web
        Development. <br />
        Of course, a bit of DevOps knowledge is always needed.
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <span></span>
          <div className={styles.content}>
            <h2>Artificial Intelligence</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae, itaque asperiores deleniti tempore fugit inventore
              provident quas explicabo iure, reiciendis voluptatem ipsum
              quibusdam illo repellendus harum distinctio incidunt sint?
            </p>
            {/* <a href="#">My Tech Stack</a> */}
          </div>
        </div>
        <div className={styles.card}>
          <span></span>
          <div className={styles.content}>
            <h2>Blockchain</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae, itaque asperiores deleniti tempore fugit inventore
              provident quas explicabo iure, reiciendis voluptatem ipsum
              quibusdam illo repellendus harum distinctio incidunt sint?
            </p>
            {/* <a href="#">My Tech Stack</a> */}
          </div>
        </div>
        <div className={styles.card}>
          <span></span>
          <div className={styles.content}>
            <h2>Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae, itaque asperiores deleniti tempore fugit inventore
              provident quas explicabo iure, reiciendis voluptatem ipsum
              quibusdam illo repellendus harum distinctio incidunt sint?
            </p>
            {/* <a href="#">My Tech Stack</a> */}
          </div>
        </div>
        <div className={styles.card}>
          <span></span>
          <div className={styles.content}>
            <h2>DevOps</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vitae, itaque asperiores deleniti tempore fugit inventore
              provident quas explicabo iure, reiciendis voluptatem ipsum
              quibusdam illo repellendus harum distinctio incidunt sint?
            </p>
            {/* <a href="#">My Tech Stack</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default tmp;
