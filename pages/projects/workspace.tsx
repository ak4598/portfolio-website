import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/workspace.module.css";
import { workspace } from "../../assets/Projects/projects";
import { GitHub } from "../../assets/SocialMediaLogos";
import useMediaQuery from "../../utils/useMediaQuery";

const Workspace: NextPage = () => {
  const isBreakpoint = useMediaQuery(850);

  const infoRef = useRef<HTMLDivElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);
  const [background, setBackground] = useState<string | boolean>(false);

  const [project, setProject] = useState<any>(false);

  const changeBackground = (e: any) => {
    if (null !== menuContainerRef.current) {
      menuContainerRef.current.style.width = "20%";
    }

    if (null !== infoRef.current) {
      infoRef.current.style.opacity = "1";
      infoRef.current.style.transform = "translateX(0%)";
    }

    setBackground(workspace.find((i) => i.title === e.target.id)!.thumbnail);
    setProject(workspace.find((i) => i.title === e.target.id));
  };
  return (
    <div>
      <div className={styles.background}>
        {project && (
          <Image
            src={project.thumbnail as string}
            blurDataURL={project.thumbnail as string}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}

        <div className={styles.infoBox} ref={infoRef}>
          {project && (
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
          )}
        </div>

        {!project && (
          <div className={styles.title}>
            Projects I built throughout my career👨🏻‍💻
          </div>
        )}

        <div className={styles.menuContainer} ref={menuContainerRef}>
          <ul className={styles.menu}>
            {workspace.map((p) => (
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

export default Workspace;
