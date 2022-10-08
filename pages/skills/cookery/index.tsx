import React, { useEffect, useState } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/cookery.module.css";

import FoodCard from "../../../components/FoodCard/FoodCard";
import shuffle from "../../../utils/shuffle";

const Cookery: NextPage = () => {
  const [posts, setPosts] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);

    fetch("/api/images/get-food-images")
      .then((res) => res.json())
      .then((id) => {
        shuffle(id);
        setPosts(id);
        setLoading(false);
      });
  }, []);

  if (isLoading || posts === null) {
    return <></>;
  }

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        Just a home chef that needs to serve his family everyday👨🏻‍🍳
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {posts.map((post: any) => (
            <FoodCard
              key={post._id}
              id={post._id}
              cuisine={""}
              name={""}
              image={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cookery;
