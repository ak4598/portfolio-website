import React from "react";
import styles from "./NavBar.module.css";
import { pages } from "./pages";
import { Menu } from "../../assets/OtherLogos";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <div>LOGO</div>
      </a>

      <button className={styles.mobileNavToggle}>
        <span className={styles.smallOnly}>
          <img src={Menu.src} />
        </span>
      </button>

      <nav>
        <ul id="nav" className={styles.navbar}>
          {pages.map((page) => (
            <li key={page.name}>
              <div>{page.name}</div>
              <ul>
                {page.sections.map((section) => (
                  <a
                    key={section}
                    href={
                      "/" +
                      page.name.toLowerCase() +
                      "/" +
                      section.toLowerCase()
                    }
                  >
                    <li>{section}</li>
                  </a>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
