import React from "react";
import Image from "next/image";
import { about1, about2, about3, about4 } from "../../assets/images";
import styles from "./styles/about.module.css";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";

const About = () => {
  return (
    <div className={styles.top}>
      <ParallaxBanner className={styles.parallaxBanner}>
        <ParallaxBannerLayer image={about1.src} speed={0} />
        {/* <Parallax speed={-20}>
          <div className={styles.title}>This is Andy Kwan.</div>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Parallax>
        <Parallax speed={-20}>
          <Parallax translateX={[300, -10]} easing="easeOutQuad" speed={-10}>
            <div className={styles.box} id={styles.intro1}>
              <p>He is currently a consultant at Deloitte FinTech Lab.</p>
            </div>
          </Parallax>
          <Parallax translateX={[-300, 10]} easing="easeOutQuad" speed={-10}>
            <div className={styles.box} id={styles.intro2}>
              <p>
                He focuses on delivering end-to-end and state-of-the-art A.I.
                solutions for his client.
              </p>
            </div>
          </Parallax>
        </Parallax> */}
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
