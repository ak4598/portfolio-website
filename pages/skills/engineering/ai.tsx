import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "../styles/ai.module.css";
import {
  Pandas,
  NumPy,
  Sklearn,
  TensorFlow,
  PyTorch,
  Keras,
  OpenCV,
  Nltk,
  HuggingFace,
  Spacy,
} from "../../../assets/LibLogos";
import { Python, Cpp } from "../../../assets/ProgLogos";
import { FFmpeg } from "../../../assets/OtherLogos";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const AI = () => {
  const isBreakpoint = useMediaQuery(1024);
  const start = useRef();
  const lang = useRef();
  const da = useRef();
  const dl = useRef();
  const cv = useRef();
  const nlp = useRef();

  const handleClick = (e) => {
    const refs = [
      start.current,
      lang.current,
      da.current,
      dl.current,
      cv.current,
      nlp.current,
    ];
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
            <button id="da" onClick={handleClick}>
              Data Analytic
            </button>
          </li>
          <li>
            <button id="dl" onClick={handleClick}>
              Deep Learning
            </button>
          </li>
          <li>
            <button id="cv" onClick={handleClick}>
              {isBreakpoint ? "CV" : "Computer Vision"}
            </button>
          </li>
          <li>
            <button id="nlp" onClick={handleClick}>
              {isBreakpoint ? "NLP" : "Natural Language Processing"}
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
              <img src={Python.src} />
            </div>
            <div>
              <img src={Cpp.src} />
            </div>
          </div>
          <div className={styles.items} id="da" ref={da}>
            <div>
              <img src={Pandas.src} />
            </div>
            <div>
              <img src={Sklearn.src} />
            </div>
            <div>
              <img src={NumPy.src} />
            </div>
          </div>
          <div className={styles.items} id="dl" ref={dl}>
            <div>
              <img src={TensorFlow.src} />
            </div>
            <div>
              <img src={PyTorch.src} />
            </div>
            <div>
              <img src={Keras.src} />
            </div>
          </div>
          <div className={styles.items} id="cv" ref={cv}>
            <div>
              <img src={OpenCV.src} />
            </div>
            <div>
              <img src={FFmpeg.src} />
            </div>
          </div>
          <div className={styles.items} id="nlp" ref={nlp}>
            <div>
              <img src={Nltk.src} />
            </div>
            <div>
              <img src={HuggingFace.src} />
            </div>
            <div>
              <img src={Spacy.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
