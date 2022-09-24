import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { about1, about2, about3, about4 } from "../../assets/images";
import styles from "./styles/about.module.css";

const About = () => {
  const buffer = 0.4;
  const breakPoints = [2, 4, 6, 8];

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
  };

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY, innerHeight } = window;
    setScrollY(window.pageYOffset);
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);

    if (
      null !== bg1.current &&
      null !== bg2.current &&
      null !== bg3.current &&
      null !== bg4.current
    ) {
      if (pageYOffset <= innerHeight * (breakPoints[0] - buffer)) {
        bg1.current.style.opacity = "1";
        bg2.current.style.opacity = "0";
      } else if (
        innerHeight * (breakPoints[0] - buffer) < pageYOffset &&
        pageYOffset <= innerHeight * breakPoints[0]
      ) {
        bg1.current.style.opacity = `${
          (innerHeight * breakPoints[0] - scrollY) / (innerHeight * buffer)
        }`;
        bg2.current.style.opacity = `${
          1 - (innerHeight * breakPoints[0] - scrollY) / (innerHeight * buffer)
        }`;
      } else if (pageYOffset <= innerHeight * (breakPoints[1] - buffer)) {
        bg2.current.style.opacity = "1";
        bg3.current.style.opacity = "0";
      } else if (
        innerHeight * (breakPoints[1] - buffer) < pageYOffset &&
        pageYOffset <= innerHeight * breakPoints[1]
      ) {
        bg2.current.style.opacity = `${
          (innerHeight * breakPoints[1] - scrollY) / (innerHeight * buffer)
        }`;
        bg3.current.style.opacity = `${
          1 - (innerHeight * breakPoints[1] - scrollY) / (innerHeight * buffer)
        }`;
      } else if (pageYOffset <= innerHeight * (breakPoints[2] - buffer)) {
        bg3.current.style.opacity = "1";
        bg4.current.style.opacity = "0";
      } else if (
        innerHeight * (breakPoints[2] - buffer) < pageYOffset &&
        pageYOffset <= innerHeight * breakPoints[2]
      ) {
        bg3.current.style.opacity = `${
          (innerHeight * breakPoints[2] - scrollY) / (innerHeight * buffer)
        }`;
        bg4.current.style.opacity = `${
          1 - (innerHeight * breakPoints[2] - scrollY) / (innerHeight * buffer)
        }`;
      } else if (pageYOffset <= innerHeight * (breakPoints[3] - buffer)) {
        bg3.current.style.opacity = "0";
        bg4.current.style.opacity = "1";
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
          <div
            className={`${styles.title} ${
              scrollY > windowSize.height * (breakPoints[0] - 1.6)
                ? styles.up
                : ""
            }`}
          >
            This is Andy Kwan.
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[0] - 1.6)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro1}
          >
            He is currently a consultant at Deloitte FinTech Lab.
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[0] - 1)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro2}
          >
            He focuses on delivering end-to-end and state-of-the-art A.I.
            solutions for his client.
          </div>
        </div>
        <div className={styles.banner} ref={bg2}>
          <Image
            src={about2.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[1] - 1.6)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro3}
          >
            He graduated from The University of Hong Kong in July 2022. <br />
            <br />
            Look at his smile, he is so happy because he can finally say good
            bye to all the assignments and examinations.
          </div>

          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[1] - 1)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro4}
          >
            Btw, his majors are indeed Economics and Finance.
            <br />
            <br />
            But declaring a minor in Computer Science was the best decision he
            had made throughout his university life.
          </div>
        </div>
        <div className={styles.banner} ref={bg3}>
          <Image
            src={about3.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[2] - 1.6)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro5}
          >
            He has a lot of hobbies such as watching anime, playing video games,
            staying at home all day long etc. So yes, basically he is an otaku.
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[2] - 1)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro6}
          >
            Hiking and traveling are perhaps his only 2 outdoors hobbies. He
            like them because he can take a lot of pictures and then turn them
            into unrealistic images.
            <br />
            <br />
            P.S. Climbing up the hill and took this for background image
            actually nearly took away his life. Please note that no sports for
            otaku, thanks.
          </div>
        </div>
        <div className={styles.banner} ref={bg4}>
          <Image
            src={about4.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[3] - 1.6)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro7}
          >
            If you wanna know more about me, you can visit the contact page 🤣
          </div>

          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[3] - 1)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro8}
          >
            If you do not wanna know more about me, this is the end of the page
            🙂
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
