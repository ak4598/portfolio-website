import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./FoodCard.module.css";
import NotFoundImg from "../../../assets/images/not_found.png";

type Props = {
  cuisine: string;
  name: string;
  image: string;
  id: string;
};

const FoodCard: React.FC<Props> = ({ cuisine, name, image, id }) => {
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/images/get-food-image?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading || post === null) {
    return <></>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={post.image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.description}>
          <p>{post.cuisine}</p>
          <h1>{post.name}</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button>Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
