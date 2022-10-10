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
    return (
      <div className={styles.background}>
        <div className={styles.title}>
          Just a home chef that needs to serve his family every day👨🏻‍🍳
        </div>
      </div>
    );
  }

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        Just a home chef that needs to serve his family every day👨🏻‍🍳
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {posts.map((post: any) => (
            <div key={post._id} className={styles.gridItem}>
              <FoodCard id={post._id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cookery;
