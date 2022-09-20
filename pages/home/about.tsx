import React from "react";
import Image from "next/image";
import about1 from "../../assets/images/about1.jpg";
import styles from "./styles/about.module.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

const About = () => {
  return (
    <div>
      <ParallaxBannerLayer
        className={styles.banner}
        image={about1.src}
        speed={-20}
      />
      <Parallax speed={-100}>
        <div className={styles.title}>This is Andy Kwan.</div>
        <div className={styles.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
