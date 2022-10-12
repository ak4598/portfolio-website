import React, { useRef, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/workspace.module.css";
import { workspace } from "../../assets/Projects/projects";
import { GitHub } from "../../assets/SocialMediaLogos";

import Slider from "../../components/Slider/Slider";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import type { project } from "../../assets/Projects/projects";
import { black } from "../../assets/images";

type Props = {
  project: project;
};

const InfoCard: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.infoBox} key={project.title + "card"}>
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className={styles.internalTechStack}>
          {project.skills.map((skill: string) => (
            <div className={styles.icon} key={project.skills.indexOf(skill)}>
              <Image src={skill} layout="fill" />
            </div>
          ))}
        </div>

        {project.github !== "" && (
          <div className={styles.github}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <div className={styles.githubIcon}>
                <Image src={GitHub} layout="fill" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const TechStack: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.techStack} key={project.title + "stack"}>
      <h1>Tech Stack</h1>
      <div className={styles.stack}>
        {project.skills.map((skill: string) => (
          <div className={styles.icon} key={project.skills.indexOf(skill)}>
            <Image src={skill} layout="fill" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Background: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.backgroundContainer} key={project.title + "bg"}>
      <Image
        src={project.thumbnail as string}
        // blurDataURL={black.src}
        // placeholder="blur"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
    </div>
  );
};

const Workspace: NextPage = () => {
  const randomIndex = Math.floor(Math.random() * workspace.length);
  const initialProject = workspace[randomIndex];

  const [curr, setCurr] = useState<project>(initialProject);

  const changeBackground = (e: any) => {
    const project = workspace.find((i) => i.title === e.target.id);

    if (undefined !== project) {
      setCurr(project);
    }
  };

  const cards = workspace.map((project) => (
    <ProjectCard
      title={project.title}
      image={project.thumbnail as string}
      onClick={changeBackground}
      key={project.title}
    />
  ));

  return (
    <div className={styles.background}>
      <Background project={curr} />
      <TechStack project={curr} />
      <InfoCard project={curr} />

      <div className={styles.slider}>
        <Slider cards={cards} />
      </div>
    </div>
  );
};

export default Workspace;
