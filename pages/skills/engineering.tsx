import React from "react";
import styles from "./styles/engineering.module.css";
import NeonCards from "../../components/NeonCards/NeonCards";
import * as lib from "../../assets/LibLogos";
import * as pro from "../../assets/ProgLogos";
import * as framework from "../../assets/FrameworkLogos";
import * as other from "../../assets/OtherLogos";

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
      <div className={styles.background2} id="ai">
        <div className={styles.content}>
          <ul className={styles.grid} id="ai">
            <li>
              <ul>
                <li>
                  <img src={pro.Python.src} />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src={lib.TensorFlow.src} />
                </li>
                <li>
                  <img src={lib.PyTorch.src} />
                </li>
                <li>
                  <img src={lib.Keras.src} />
                </li>
              </ul>
            </li>

            <li>
              <ul>
                <li>
                  <img src={lib.Pandas.src} />
                </li>
                <li>
                  <img src={lib.NumPy.src} />
                </li>
                <li>
                  <img src={lib.Sklearn.src} />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src={lib.OpenCV.src} />
                </li>
                <li>
                  <img src={other.FFmpeg.src} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.background3} id="blockchain">
        <div className={styles.content}>
          <ul className={styles.grid} id="blockchain">
            <li>
              <ul>
                <li>
                  <img src={pro.Solidity.src} />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src={framework.Hardhat.src} />
                </li>
                <li>
                  <img src={framework.Hyperledger.src} />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src={other.Moralis.src} />
                </li>
                <li>
                  <img src={other.TheGraph.src} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.background4} id="web">
        <div className={styles.content}>
          <ul className={styles.grid} id="web">
            <li>
              <ul>
                <li>
                  <img src={pro.JavaScript.src} />
                </li>
                <li>
                  <img src={pro.Html.src} />
                </li>
                <li>
                  <img src={pro.Css.src} />
                </li>
                <li>
                  <img src={pro.TypeScript.src} />
                </li>
              </ul>
            </li>

            <li>
              <ul>
                <li>
                  <img src={framework.Nextjs.src} />
                </li>
                <li>
                  <img src={framework.React_.src} />
                </li>
              </ul>
            </li>

            <li>
              <ul>
                <li>
                  <img src={framework.Express.src} />
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <img src={lib.MUI.src} />
                </li>
                <li>
                  <img src={lib.Tailwind.src} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.background5} id="devops">
        <div className={styles.content}>
          <ul className={styles.grid} id="devops">
            <li>
              <img src={other.Docker.src} />
            </li>
            <li>
              <img src={other.Git.src} />
            </li>
            <li>
              <img src={other.Linux.src} />
            </li>
            <li>
              <img src={other.Bash.src} />
            </li>
            <li>
              <ul>
                <li>
                  <img src={other.Redis.src} />
                </li>
                <li>
                  <img src={other.MongoDB.src} />
                </li>
                <li>
                  <img src={other.MySQL.src} />
                </li>
                <li>
                  <img src={other.PostgreSQL.src} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
