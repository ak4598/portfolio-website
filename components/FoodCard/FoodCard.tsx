import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FoodCard.module.css";
import NotFoundImg from "../../assets/images/not_found.png";
import { Loading } from "../../assets/OtherLogos/index";

type Props = {
  id: string;
};

const FoodCard: React.FC<Props> = ({ id }) => {
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const recipeLink = `/skills/cookery/${id}`;

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
    return (
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={Loading.src}
            // blurDataURL={NotFoundImg.src}
            // placeholder="blur"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    );
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
          <Link href={recipeLink}>
            <button>Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
