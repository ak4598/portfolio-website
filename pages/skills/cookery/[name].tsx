import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/recipe.module.css";
import Error from "../../404";

const Recipe: NextPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    if (router.query.name !== undefined) {
      fetch(`/api/images/get-food-image?id=${router.query.name}`)
        .then((res) => {
          console.log(res);
          if (res.status === 404) {
            return null;
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPost(data);
          setLoading(false);
        });
    }
  }, [router.query.name]);

  if (isLoading) {
    return (
      <div>
        <div className={styles.background}></div>
      </div>
    );
  }
  if (!isLoading && post === null) {
    return <Error />;
  }

  return (
    <div>
      <div className={styles.background}></div>
      {/* <div className={styles.title}>{router.query.name}</div>
      <div className={styles.image}>
        <Image src={post.image} layout="fill" objectFit="cover" />
      </div> */}
    </div>
  );
};

export default Recipe;
