import React, { useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/web.module.css";
import { Tailwind, MUI } from "../../../assets/LibLogos";
import { React_, Nextjs, Express } from "../../../assets/FrameworkLogos";
import { Html, Css, JavaScript, TypeScript } from "../../../assets/ProgLogos";
import { FFmpeg } from "../../../assets/OtherLogos";

const Web: NextPage = () => {
  const start = useRef<HTMLDivElement | null>(null);
  const lang = useRef<HTMLDivElement | null>(null);
  const fw = useRef<HTMLDivElement | null>(null);
  const ui = useRef<HTMLDivElement | null>(null);
  const b = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const refs = [
      start.current,
      lang.current,
      fw.current,
      ui.current,
      b.current,
    ];
    refs.map((ref) => {
      if (ref !== null) {
        if (ref.id === (event.target as HTMLElement).id) {
          ref.style.display = "flex";
        } else {
          ref.style.display = "none";
        }
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
            <button id="ui" onClick={handleClick}>
              UI/UX
            </button>
          </li>
          <li>
            <button id="b" onClick={handleClick}>
              Backend
            </button>
          </li>
          <li>
            <Link href="/skills/engineering">
              <button>Back</button>
            </Link>
          </li>
        </ul>

        <div className={styles.card}>
          <div className={styles.items} id="start" ref={start}>
            <div>👈🏻 👨🏻‍💻</div>
          </div>
          <div className={styles.items} id="lang" ref={lang}>
            <div>
              <img src={TypeScript.src} />
            </div>
            <div>
              <img src={JavaScript.src} />
            </div>
            <div>
              <img src={Html.src} />
            </div>
            <div>
              <img src={Css.src} />
            </div>
          </div>
          <div className={styles.items} id="fw" ref={fw}>
            <div>
              <img src={Nextjs.src} />
            </div>
            <div>
              <img src={React_.src} />
            </div>
          </div>
          <div className={styles.items} id="ui" ref={ui}>
            <div>
              <img src={MUI.src} />
            </div>
            <div>
              <img src={Tailwind.src} />
            </div>
          </div>
          <div className={styles.items} id="b" ref={b}>
            <div>
              <img src={Express.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;
