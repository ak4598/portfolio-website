import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import backgroundImage from "../assets/background/iceland.jpg";

const Home: NextPage = () => {
  console.log(backgroundImage);
  return (
    <div>
      <img className={styles.image} src={backgroundImage.src}></img>
      <div className={styles.mask}></div>

      <div className={styles.titleOverlay}>
        <div className={styles.title}>Andy Kwan&nbsp;</div>
        <div className={styles.subtitle}>
          Cookery · Photography · Engineering
        </div>
      </div>
    </div>
  );
};

export default Home;
