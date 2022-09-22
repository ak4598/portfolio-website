import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import { about1, about2, about3, about4 } from "../../assets/images";
import styles from "./styles/about.module.css";

const About = () => {
  const bg1 = useRef<HTMLDivElement | null>(null);
  const bg2 = useRef<HTMLDivElement | null>(null);
  const bg3 = useRef<HTMLDivElement | null>(null);
  const bg4 = useRef<HTMLDivElement | null>(null);

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
    setScrollY(window.pageYOffset);
    const { pageYOffset, scrollY, innerHeight } = window;

    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    if (pageYOffset >= innerHeight * 2) {
      if (null !== bg1.current && null !== bg2.current) {
        bg1.current.style.opacity = `${
          (innerHeight * 2 - (scrollY - innerHeight * 2)) / (innerHeight * 2)
        }`;
        bg2.current.style.opacity = `${
          (scrollY - innerHeight * 2) / (innerHeight * 2)
        }`;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.banner} ref={bg1}>
          <Image
            src={about1.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className={styles.title}>
            This is Andy Kwan.
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.banner} ref={bg2}>
          <Image
            src={about2.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.banner} ref={bg3}>
          <Image
            src={about3.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.banner} ref={bg4}>
          <Image
            src={about4.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* He is currently a consultant at Deloitte FinTech Lab. */
}
{
  /* He focuses on delivering end-to-end and state-of-the-art A.I. solutions for his client. */
}
