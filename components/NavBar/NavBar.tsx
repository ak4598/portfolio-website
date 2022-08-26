import React, { useRef, useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { pages } from "./pages";
import { Menu, Close } from "../../assets/OtherLogos";

const NavBar = () => {
  const ref = useRef();
  const [toggleIcon, setToggleIcon] = useState(Menu.src);

  const openMenu = () => {
    if (window.innerWidth <= 560) {
      if (ref.current.style.transform === "translateX(0%)") {
        setToggleIcon(Menu.src);
        ref.current.style.transform = "translateX(100%)";
      } else {
        setToggleIcon(Close.src);
        ref.current.style.transform = "translateX(0%)";
      }
    }
  };

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <div>LOGO</div>
      </a>

      <button className={styles.mobileNavToggle} onClick={openMenu}>
        <span className={styles.smallOnly}>
          <img src={toggleIcon} />
        </span>
      </button>

      <nav>
        <ul id="nav" className={styles.navbar} ref={ref} data-visible="true">
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
