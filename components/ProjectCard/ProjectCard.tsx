import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { background } from "../../assets/images";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src={background.src}
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.image}
      />
      <div className={styles.leftMask}>
        <div className={styles.box}>
          <h1>Kaggle Pipeline</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quo amet vel, explicabo sint similique commodi nulla voluptas
            facilis et qui nesciunt soluta rem, quis impedit. Cupiditate dicta
            repellendus nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
