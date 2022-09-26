import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { background } from "../../assets/images";
import * as pj from "../../assets/Projects";

type Props = {
  title: string;
  description: string;
  thumbnail: string;
};

const ProjectCard: React.FC<Props> = ({ title, description, thumbnail }) => {
  return (
    <div className={styles.card}>
      <Image
        src={thumbnail}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.image}
      />
      <div className={styles.leftMask}>
        <div className={styles.box}>
          <h1>{title}</h1>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
