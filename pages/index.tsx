import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import backgroundImage from "../assets/background/iceland.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andy Kwan</title>
      </Head>
      <Image layout="fill" className={styles.image} src={backgroundImage.src} />
      <div className={styles.mask}></div>

      <div className={styles.titleOverlay}>
        <div className={styles.title}>Andy Kwan</div>
        <div className={styles.subtitle}>
          Cookery · Photography · Engineering
        </div>
        <div className={styles.subtitleSmall}>
          <div>Cookery</div>
          <div>Photography</div>
          <div>Engineering</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
