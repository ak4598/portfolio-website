import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/workspace.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { workspace } from "../../components/ProjectCard/projects";
import { GitHub } from "../../assets/SocialMediaLogos";

const Workspace: NextPage = () => {
  const infoRef = useRef<HTMLDivElement | null>(null);
  const [background, setBackground] = useState<string | boolean>(false);

  // try useEffect on infoBox

  const [project, setProject] = useState<any>(false);

  const changeBackground = (e: any) => {
    setBackground(workspace.find((i) => i.title === e.target.id)!.thumbnail);
    setProject(workspace.find((i) => i.title === e.target.id));
  };
  return (
    <div>
      <div className={styles.background}>
        {project && (
          <Image
            src={project.thumbnail as string}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        )}
        {project && (
          <div className={styles.infoBox} ref={infoRef}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.skills.map((skill: string) => (
                <Image
                  key={project.skills.indexOf(skill)}
                  src={skill}
                  width={50}
                  height={50}
                  quality={100}
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
                  <Image src={GitHub} width={36} height={36} quality={100} />
                </a>
              </div>
            )}
          </div>
        )}

        <ul className={styles.menu}>
          {workspace.map((p) => (
            <li key={p.title} className={styles.pjItem}>
              <button onClick={changeBackground} id={p.title}>
                {p.title}
              </button>
            </li>
          ))}
        </ul>

        {/* <button className={styles.show}></button> */}
      </div>
    </div>
  );
};

export default Workspace;
