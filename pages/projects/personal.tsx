import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "./styles/personal.module.css";
import { background } from "../../assets/images";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Personal: NextPage = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.title}>Personal</div>
      <div className={styles.container}>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Personal;
