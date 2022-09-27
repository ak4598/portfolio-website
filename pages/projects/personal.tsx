import React from "react";
import type { NextPage } from "next";
import styles from "./styles/personal.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { personal } from "../../components/ProjectCard/projects";

const Personal: NextPage = () => {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.title}>
          I build side projects when I am bored 🥱
        </div>
        <div className={styles.container}>
          {personal.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              thumbnail={p.thumbnail}
              github={p.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personal;
