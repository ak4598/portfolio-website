import React from "react";
import styles from "../styles/ai.module.css";
import * as lib from "../../../assets/LibLogos";
import * as pro from "../../../assets/ProgLogos";
import * as framework from "../../../assets/FrameworkLogos";
import * as other from "../../../assets/OtherLogos";

const AI = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        {/* <div className={styles.title}>Artificial Intelligence</div> */}
        <div className={styles.grid}>
          <div className={styles.gridBox} id="lang">
            <div className={styles.category}>Language</div>
            <div className={styles.gridItem}>
              <img src={pro.Python.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={pro.Cpp.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="dl">
            <div className={styles.category}>Deep Learning</div>
            <div className={styles.gridItem}>
              <img src={lib.TensorFlow.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={lib.PyTorch.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={lib.Keras.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="da">
            <div className={styles.category}>Data Analytics</div>
            <div className={styles.gridItem}>
              <img src={lib.Pandas.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={lib.NumPy.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={lib.Sklearn.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="cv">
            <div className={styles.category}>Computer Vision</div>
            <div className={styles.gridItem}>
              <img src={lib.OpenCV.src} />
            </div>
            <div className={styles.gridItem}>
              <img src={other.FFmpeg.src} />
            </div>
          </div>
          <div className={styles.gridBox} id="back">
            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z"
                  fill="#f8f9f9"
                />
              </svg>
            </div>
            <a className={styles.gridItem} href="/skills/engineering">
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
