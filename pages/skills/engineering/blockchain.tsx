import React, { useRef } from "react";
import styles from "../styles/blockchain.module.css";
import { Hardhat, Hyperledger } from "../../../assets/FrameworkLogos";
import { Solidity } from "../../../assets/ProgLogos";
import { Moralis, TheGraph } from "../../../assets/OtherLogos";

const Blockchain = () => {
  const start = useRef();
  const lang = useRef();
  const fw = useRef();
  const s = useRef();

  const handleClick = (e) => {
    const refs = [start.current, lang.current, fw.current, s.current];
    refs.map((ref) => {
      if (ref.id === e.target.id) {
        ref.style.display = "flex";
      } else {
        ref.style.display = "none";
      }
    });
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>
            <button id="lang" onClick={handleClick}>
              Language
            </button>
          </li>
          <li>
            <button id="fw" onClick={handleClick}>
              Framework
            </button>
          </li>
          <li>
            <button id="s" onClick={handleClick}>
              Service
            </button>
          </li>
          <li>
            <a href="/skills/engineering">
              <button>Back</button>
            </a>
          </li>
        </ul>

        <div className={styles.card}>
          <div className={styles.items} id="start" ref={start}>
            <div>👈🏻 👨🏻‍💻</div>
          </div>
          <div className={styles.items} id="lang" ref={lang}>
            <div>
              <img src={Solidity.src} />
            </div>
          </div>
          <div className={styles.items} id="fw" ref={fw}>
            <div>
              <img src={Hardhat.src} />
            </div>
            <div>
              <img src={Hyperledger.src} />
            </div>
          </div>
          <div className={styles.items} id="s" ref={s}>
            <div>
              <img src={TheGraph.src} />
            </div>
            <div>
              <img src={Moralis.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
