import type { NextPage } from "next";

import Image from "next/image";
import styles from "./index.module.css";
import { background } from "../assets/images";

const Home: NextPage = () => {
  return (
    <div className={styles.top}>
      <Image
        layout="fill"
        className={styles.image}
        objectFit="cover"
        src={background.src}
        blurDataURL={background.src}
        quality={100}
      />
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
