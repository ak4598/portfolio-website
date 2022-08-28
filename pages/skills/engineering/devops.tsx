import React, { useRef } from "react";
import styles from "../styles/devops.module.css";
import {
  Git,
  Ubuntu,
  Debian,
  Docker,
  Bash,
  MongoDB,
  MySQL,
  Redis,
  PostgreSQL,
  K8S,
  Regex,
  Vim,
  Tmux,
} from "../../../assets/OtherLogos";

const DevOps = () => {
  const start = useRef();
  const os = useRef();
  const ms = useRef();
  const db = useRef();
  const others = useRef();

  const handleClick = (e) => {
    const refs = [
      start.current,
      os.current,
      ms.current,
      db.current,
      others.current,
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
            <button id="os" onClick={handleClick}>
              Operating System
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
            <a href="/skills/engineering">
              <button>Back</button>
            </a>
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
              <img src={Docker.src} />
            </div>
            <div>
              <img src={K8S.src} />
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
            <div>
              <img src={Tmux.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
