import React, { useRef, useEffect, useState, useCallback } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/devops.module.css";
import {
  Git,
  Ubuntu,
  Debian,
  Bash,
  MongoDB,
  MySQL,
  Redis,
  PostgreSQL,
  Regex,
  Vim,
  K8Ss,
  Dockers,
} from "../../../assets/OtherLogos";
import useMediaQuery from "../../../utils/useMediaQuery";

const DevOps: NextPage = () => {
  const isBreakpoint = useMediaQuery(768);
  const start = useRef<HTMLDivElement | null>(null);
  const os = useRef<HTMLDivElement | null>(null);
  const ms = useRef<HTMLDivElement | null>(null);
  const db = useRef<HTMLDivElement | null>(null);
  const others = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const refs = [
      start.current,
      os.current,
      ms.current,
      db.current,
      others.current,
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
            <button id="os" onClick={handleClick}>
              {isBreakpoint ? "OS" : "Operating System"}
            </button>
          </li>
          <li>
            <button id="ms" onClick={handleClick}>
              Mircoservices
            </button>
          </li>
          <li>
            <button id="db" onClick={handleClick}>
              Database
            </button>
          </li>
          <li>
            <button id="others" onClick={handleClick}>
              Others
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
          <div className={styles.items} id="os" ref={os}>
            <div>
              <img src={Ubuntu.src} />
            </div>
            <div>
              <img src={Debian.src} />
            </div>
          </div>
          <div className={styles.items} id="ms" ref={ms}>
            <div>
              <img src={Dockers.src} />
            </div>
            <div>
              <img src={K8Ss.src} />
            </div>
          </div>
          <div className={styles.items} id="db" ref={db}>
            <div>
              <img src={MySQL.src} />
            </div>
            <div>
              <img src={PostgreSQL.src} />
            </div>
            <div>
              <img src={MongoDB.src} />
            </div>
            <div>
              <img src={Redis.src} />
            </div>
          </div>
          <div className={styles.items} id="others" ref={others}>
            <div>
              <img src={Bash.src} />
            </div>
            <div>
              <img src={Git.src} />
            </div>
            <div>
              <img src={Regex.src} />
            </div>
            <div>
              <img src={Vim.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
