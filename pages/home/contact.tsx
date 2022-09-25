import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/contact.module.css";
import {
  Facebook,
  Instagram,
  GitHub,
  LinkedIn,
} from "../../assets/SocialMediaLogos";
import { mySocialMedia } from "../../components/NavBar/pages";

const Contact: NextPage = () => {
  console.log(Facebook);
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.title}>Connect with me!</div>
        <ul>
          {mySocialMedia.map((page) => (
            <li key={page.name}>
              <a href={page.link} target="_blank" rel="noopener noreferrer">
                <div>
                  <img src={page.logo} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
