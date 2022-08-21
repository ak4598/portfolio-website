import React from "react";
import styles from "./NavBar.module.css";
import { pages } from "./pages";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <div>LOGO</div>
      </a>

      <nav className={styles.navbar}>
        <ul>
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
