import React, { useEffect, useCallback, useState } from "react";
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
  const [scrollY, setScrollY] = useState<number>(0);
  const [windowSize, setWindowSize] = useState<{ [name: string]: number }>({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log("width", windowSize.width, "height", windowSize.height);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.banner}>
        <Image src={about1.src} layout="fill" objectFit="cover" quality={100} />
        <div className={styles.title}>
          This is Andy Kwan.
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={about2.src} layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className={styles.banner}>
        <Image src={about3.src} layout="fill" objectFit="cover" quality={100} />
      </div>
      <div className={styles.banner}>
        <Image src={about4.src} layout="fill" objectFit="cover" quality={100} />
      </div>
      {/* He is currently a consultant at Deloitte FinTech Lab. */}
      {/* He focuses on delivering end-to-end and state-of-the-art A.I. solutions for his client. */}
    </div>
  );
};

export default About;
