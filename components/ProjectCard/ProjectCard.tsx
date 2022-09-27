import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import { background } from "../../assets/images";
import * as pj from "../../assets/Projects";
import { GitHub } from "../../assets/SocialMediaLogos";

type Props = {
  title: string;
  description: string;
  thumbnail: string;
  github?: string;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  thumbnail,
  github,
}) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={thumbnail}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.leftMask}>
        <div className={styles.box}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.github}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image src={GitHub} width={36} height={36} quality={100} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
