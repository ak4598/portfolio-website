import React, { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { about1, about2, about3, about4 } from "../../assets/images";
import styles from "./styles/about.module.css";

const About = () => {
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
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
  }, []);

  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div
          className={`${styles.banner} ${
            0 <= scrollY && scrollY < windowSize.height * breakPoints[0]
              ? styles.show
              : styles.hidden
          }`}
          ref={bg1}
        >
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
            id={styles.title1}
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
            He is currently a{" "}
            <span style={{ color: "ForestGreen" }}>consultant</span> at{" "}
            <span style={{ color: "ForestGreen" }}>Deloitte FinTech Lab</span>👨🏻‍💻
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[0] - 1)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro2}
          >
            He focuses on delivering end-to-end and state-of-the-art{" "}
            <span style={{ color: "CornflowerBlue" }}>A.I. solutions</span> for
            his clients🤖
          </div>
        </div>
        <div
          className={`${styles.banner} ${
            windowSize.height * breakPoints[0] <= scrollY &&
            scrollY < windowSize.height * breakPoints[1]
              ? styles.show
              : styles.hidden
          }`}
          ref={bg2}
        >
          <Image
            src={about2.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div
            className={`${styles.title} ${
              scrollY > windowSize.height * (breakPoints[1] - 1.6)
                ? styles.up
                : ""
            }`}
            id={styles.title2}
          >
            More about Andy.
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[1] - 1.6)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro3}
          >
            He graduated from{" "}
            <span style={{ color: "peru" }}>The University of Hong Kong</span>{" "}
            in July 2022👨🏻‍🎓
            <br />
            <br />
            Look at his smile, he is so happy because he can finally say good
            bye to all the assignments and examinations🤣
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[1] - 1)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro4}
          >
            Btw, his majors are indeed{" "}
            <span style={{ color: "SeaGreen" }}>Economics and Finance</span>.💵
            <br />
            <br />
            But declaring a minor in{" "}
            <span style={{ color: "SteelBlue" }}>Computer Science</span> was the
            best decision he had made throughout his university life.😎
          </div>
        </div>
        <div
          className={`${styles.banner} ${
            windowSize.height * breakPoints[1] < scrollY &&
            scrollY < windowSize.height * breakPoints[2]
              ? styles.show
              : styles.hidden
          }`}
          ref={bg3}
        >
          <Image
            src={about3.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div
            className={`${styles.title} ${
              scrollY > windowSize.height * (breakPoints[2] - 1.6)
                ? styles.up
                : ""
            }`}
            id={styles.title3}
          >
            The real Andy.
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[2] - 1.6)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro5}
          >
            He has a lot of hobbies such as watching{" "}
            <span style={{ color: "HotPink" }}>anime</span>, playing{" "}
            <span style={{ color: "SlateBlue" }}>video games</span>,{" "}
            <span style={{ color: "Orchid" }}>staying at home</span> all day
            long etc. So yes, basically he is an{" "}
            <span style={{ color: "Violet" }}>otaku</span>👾
          </div>
          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[2] - 1)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro6}
          >
            Hiking and travelling are perhaps his only 2 outdoors hobbies. He
            like them because he can take a lot of pictures and then turn them
            into{" "}
            <span style={{ color: "LightSalmon" }}>unrealistic images</span>
            🤓
            <br />
            <br />
            P.S. Climbing up the hill and taking this background image nearly
            took away his life. Please note that no sports for otaku, thanks🥵
          </div>
        </div>
        <div
          className={`${styles.banner} ${
            windowSize.height * breakPoints[2] < scrollY
              ? styles.show
              : styles.hidden
          }`}
          ref={bg4}
        >
          <Image
            src={about4.src}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          {scrollY < windowSize.height * (breakPoints[3] - 1) ? (
            <div className={`${styles.title}`} id={styles.title4}>
              <div className={`${styles.ending}`}>Interested in Andy?</div>
              <div className={`${styles.arrow} ${styles.normal}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : (
            <div className={`${styles.title}`} id={styles.title4}>
              <div className={`${styles.ending} ${styles.down}`}>The end.</div>
              <div className={`${styles.arrow} ${styles.opposite}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[3] - 1.6)
                ? styles.in
                : styles.outLeft
            }`}
            id={styles.intro7}
          >
            If you{" "}
            <span style={{ color: "IndianRed" }}>wanna connect with me</span>,
            you can visit the{" "}
            <span className={styles.link}>
              <Link href="/home/contact">contact</Link>
            </span>{" "}
            page🤣
          </div>

          <div
            className={`${styles.content} ${
              scrollY > windowSize.height * (breakPoints[3] - 1)
                ? styles.in
                : styles.outRight
            }`}
            id={styles.intro8}
          >
            If you{" "}
            <span style={{ color: "SteelBlue" }}>don{"'"}t wanna connect</span>{" "}
            with me, thanks for your time🥲
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
