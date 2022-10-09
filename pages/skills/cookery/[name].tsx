import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/recipe.module.css";
import Error from "../../404";
import { Cook, Clock } from "../../../assets/OtherLogos";

const Recipe: NextPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    if (router.query.name !== undefined) {
      fetch(`/api/images/get-food-image?id=${router.query.name}`)
        .then((res) => {
          if (res.status === 404) {
            return null;
          }
          return res.json();
        })
        .then((data) => {
          setPost(data);
          setLoading(false);
        });
    }
  }, [router.query.name]);

  if (isLoading) {
    return <div className={styles.background}></div>;
  }
  if (!isLoading && post === null) {
    return <Error />;
  }

  return (
    <div className={styles.background}>
      <div className={styles.banner}>
        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <Image src={post.image} layout="fill" objectFit="cover" />
            <div className={styles.nameContainer}>
              <p>{post.cuisine}</p>
              <h1>{post.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details1}>
        <div className={styles.difficulty}>
          <h1>Difficulty</h1>
          <Image src={Cook.src} width={100} height={100} />
          {/* <Image src={Cook.src} width={100} height={100} />
          <Image src={Cook.src} width={100} height={100} />
          <Image src={Cook.src} width={100} height={100} />
          <Image src={Cook.src} width={100} height={100} /> */}
        </div>
        <div className={styles.time}>
          <div>
            <Image src={Clock.src} width={100} height={100} />
          </div>
          <h1>{post.time} mins</h1>
        </div>
      </div>
      {/* <div className={styles.details2}>
        <div className={styles.ingredients}>
          <h1>Ingredients</h1>
        </div>
        <div className={styles.steps}>
          <h1>Steps</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Recipe;
