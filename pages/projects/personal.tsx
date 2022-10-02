import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/personal.module.css";
import { personal } from "../../assets/Projects/projects";
import { GitHub } from "../../assets/SocialMediaLogos";
import useMediaQuery from "../../utils/useMediaQuery";

const Personal: NextPage = () => {
  const isBreakpoint = useMediaQuery(850);

  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const backRef = useRef<HTMLButtonElement | null>(null);

  const [curr, setCurr] = useState<any>(false);

  const reset = (e: any) => {
    setCurr({
      ...curr,
      card: null,
    });

    if (null !== backgroundRef.current) {
      backgroundRef.current.style.opacity = "0";
    }

    if (null !== menuContainerRef.current) {
      menuContainerRef.current.style.width = "100%";
    }

    if (null !== titleContainerRef.current) {
      titleContainerRef.current.style.opacity = "1";
      titleContainerRef.current.style.transform = "translateY(0%)";
    }

    if (null !== backRef.current) {
      backRef.current.style.opacity = "0";
      backRef.current.style.transform = "translateX(-100%)";
    }
  };

  const changeBackground = (e: any) => {
    const project = personal.find((i) => i.title === e.target.id);

    if (undefined !== project) {
      setCurr({
        card: (
          <div className={styles.infoBox} key={project.title + "card"}>
            <div>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.skills.map((skill: string) => (
                  <Image
                    key={project.skills.indexOf(skill)}
                    src={skill}
                    width={isBreakpoint ? 30 : 50}
                    height={isBreakpoint ? 30 : 50}
                  />
                ))}
              </div>
              {project.github !== "" && (
                <div className={styles.github}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={GitHub}
                      width={isBreakpoint ? 20 : 36}
                      height={isBreakpoint ? 20 : 36}
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        ),
        background: (
          <div
            className={styles.backgroundContainer}
            ref={backgroundRef}
            key={project.title + "bg"}
          >
            <Image
              src={project.thumbnail as string}
              blurDataURL={project.thumbnail as string}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ),
      });
    }

    if (null !== menuContainerRef.current) {
      menuContainerRef.current.style.width = "20%";
    }

    if (null !== titleContainerRef.current) {
      titleContainerRef.current.style.opacity = "0";
      titleContainerRef.current.style.transform = "translateY(-100%)";
    }

    if (null !== backgroundRef.current) {
      backgroundRef.current.style.opacity = "1";
    }

    if (null !== backRef.current) {
      backRef.current.style.opacity = "1";
      backRef.current.style.transform = "translateX(0%)";
    }
  };

  return (
    <div>
      <div className={styles.background}>
        {curr.background}
        {curr.card}

        <div className={styles.title} ref={titleContainerRef}>
          I build side projects when I am bored🥱
        </div>

        <button className={styles.back} ref={backRef} onClick={reset}>
          Back
        </button>

        <div className={styles.menuContainer} ref={menuContainerRef}>
          <ul className={styles.menu}>
            {personal.map((p) => (
              <li key={p.title} className={styles.pjItem}>
                <button onClick={changeBackground} id={p.title}>
                  {p.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Personal;
