import React from "react";
import styles from "../styles/ai.module.css";
import * as lib from "../../../assets/LibLogos";
import * as pro from "../../../assets/ProgLogos";
import * as framework from "../../../assets/FrameworkLogos";
import * as other from "../../../assets/OtherLogos";

const AI = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>Language</li>
          <li>Data Analytic</li>
          <li>Deep Learning</li>
          <li>Computer Vision</li>
          <li>Natural Language Processing</li>
        </ul>
        <div className={styles.card}>
          <div className={styles.items}>
            <div>
              <img src={pro.Python.src} />
            </div>
          </div>
          <div className={styles.items}>
            <div>
              <img src={lib.Pandas.src} />
            </div>
            <div>
              <img src={lib.NumPy.src} />
            </div>
            <div>
              <img src={lib.Sklearn.src} />
            </div>
          </div>
          <div className={styles.items}>
            <div>
              <img src={lib.TensorFlow.src} />
            </div>
            <div>
              <img src={lib.PyTorch.src} />
            </div>
            <div>
              <img src={lib.Keras.src} />
            </div>
          </div>
          <div className={styles.items}>
            <div style={{ width: "100px", height: "100px" }}>
              <img src={lib.OpenCV.src} />
            </div>
            <div>
              <img src={other.FFmpeg.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
