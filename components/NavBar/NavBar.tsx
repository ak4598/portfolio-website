import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <div>LOGO</div>
      </a>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <div>HOME</div>
            <ul>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </li>
          <li>
            <div>SKILLS</div>
            <ul>
              <li>
                <a>COOKERY</a>
              </li>
              <li>
                <a>PHOTOGRAPHY</a>
              </li>
              <li>
                <a>ENGINEERING</a>
              </li>
            </ul>
          </li>
          <li>
            <div>PROJECTS</div>
            <ul>
              <li>
                <a>PERSONAL</a>
              </li>
              <li>
                <a>WORKSPACE</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
