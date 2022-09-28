import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/personal.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { personal } from "../../components/ProjectCard/projects";
import { GitHub } from "../../assets/SocialMediaLogos";

const Personal: NextPage = () => {
  const [background, setBackground] = useState<string | boolean>(false);

  const [project, setProject] = useState<any>(false);

  const changeBackground = (e: any) => {
    setBackground(personal.find((i) => i.title === e.target.id)!.thumbnail);
    setProject(personal.find((i) => i.title === e.target.id));
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
          <div className={styles.infoBox}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.skills.map((skill: string) => (
                <Image
                  key={skill}
                  src={skill}
                  width={50}
                  height={50}
                  quality={100}
                />
              ))}
            </div>
            <div className={styles.github}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={GitHub} width={36} height={36} quality={100} />
              </a>
            </div>
          </div>
        )}

        {/* <div className={styles.title}>
          I build side projects when I am bored 🥱
        </div> */}
        {/* <div className={styles.container}>
          {personal.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              thumbnail={p.thumbnail}
              github={p.github}
            />
          ))}
        </div> */}
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
  );
};

export default Personal;
