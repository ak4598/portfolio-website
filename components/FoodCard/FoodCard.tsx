import React from "react";
import Image from "next/image";
import styles from "./FoodCard.module.css";

type Props = {
  cuisine: string;
  name: string;
  image: string;
};

const FoodCard: React.FC<Props> = ({ cuisine, name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.description}>
          <p>{cuisine}ITALIAN</p>
          <h1>{name}Carbonara</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button>Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
