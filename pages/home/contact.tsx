import React from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import {
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
} from "../../assets/SocialMediaLogos";
import { mySocialMedia } from "../../components/NavBar/pages";

const Contact = () => {
  console.log(Facebook);
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <ul>
          <li>
            <a
              href={mySocialMedia.Facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={Facebook.src} />
              </div>
            </a>
          </li>
          <li>
            <a
              href={mySocialMedia.Instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={Instagram.src} />
              </div>
            </a>
          </li>
          <li>
            <a
              href={mySocialMedia.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={LinkedIn.src} />
              </div>
            </a>
          </li>
          <li>
            <a
              href={mySocialMedia.GitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src={GitHub.src} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
