import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { pages } from "./pages";
import { Menu, Close } from "../../assets/OtherLogos";

const NavBar = () => {
  const ref = useRef<HTMLUListElement>(null);
  const [toggleIcon, setToggleIcon] = useState(Menu.src);

  const openMenu = () => {
    if (window.innerWidth <= 560) {
      if (null !== ref.current) {
        if (ref.current.style.transform === "translateX(0%)") {
          setToggleIcon(Menu.src);
          ref.current.style.transform = "translateX(100%)";
        } else {
          setToggleIcon(Close.src);
          ref.current.style.transform = "translateX(0%)";
        }
      }
    }
  };

  const closeMenu = () => {
    if (window.innerWidth <= 560) {
      if (null !== ref.current) {
        setToggleIcon(Menu.src);
        ref.current.style.transform = "translateX(100%)";
      }
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>LOGO</a>
      </Link>

      <button className={styles.mobileNavToggle} onClick={openMenu}>
        <span className={styles.smallOnly}>
          <img src={toggleIcon} />
        </span>
      </button>

      <nav className={styles.full}>
        <ul id="nav" className={styles.navbar}>
          {pages.map((page) => (
            <li key={page.name}>
              <div>{page.name}</div>
              <ul>
                {page.sections.map((section) => (
                  <Link
                    key={section}
                    href={
                      "/" +
                      page.name.toLowerCase() +
                      "/" +
                      section.toLowerCase()
                    }
                  >
                    <button>
                      <li>{section}</li>
                    </button>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <nav className={styles.small}>
        <ul id="nav" className={styles.navbar} ref={ref} data-visible="true">
          {pages.map((page) => (
            <li key={page.name}>
              <div>{page.name}</div>
              <ul>
                {page.sections.map((section) => (
                  <Link
                    key={section}
                    href={
                      "/" +
                      page.name.toLowerCase() +
                      "/" +
                      section.toLowerCase()
                    }
                  >
                    <button onClick={closeMenu}>
                      <li>{section}</li>
                    </button>
                  </Link>
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
