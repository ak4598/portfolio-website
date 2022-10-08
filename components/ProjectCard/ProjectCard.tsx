import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

type Props = {
  title: string;
  image: string;
  onClick: any;
};

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.cover}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.about}>
          <button id={props.title} onClick={props.onClick}>
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
