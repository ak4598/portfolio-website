import React from "react";
import Image from "next/image";
import { about1, about2, about3, about4 } from "../../assets/images";
import styles from "./styles/about.module.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

const About = () => {
  return (
    <div>
      <ParallaxBanner className={styles.parallaxBanner}>
        <ParallaxBannerLayer image={about1.src} speed={0} />
        <Parallax speed={-20}>
          <div className={styles.title}>This is Andy Kwan.</div>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Parallax>
      </ParallaxBanner>
      <ParallaxBanner className={styles.parallaxBanner}>
        <ParallaxBannerLayer image={about2.src} speed={0} />
      </ParallaxBanner>
      <ParallaxBanner className={styles.parallaxBanner}>
        <ParallaxBannerLayer image={about3.src} speed={0} />
      </ParallaxBanner>
      <ParallaxBanner className={styles.parallaxBanner}>
        <ParallaxBannerLayer image={about4.src} speed={0} />
      </ParallaxBanner>
    </div>
  );
};

export default About;
