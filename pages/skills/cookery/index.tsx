import React, { useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/cookery.module.css";
import FoodCard from "../../../components/FoodCard/FoodCard";

import Image from "next/image";
import { Loading } from "../../../assets/OtherLogos";
import shuffle from "../../../utils/shuffle";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setIds } from "../../../store/slices/cookerySlice";

const Cookery: NextPage = () => {
  const dispatch = useDispatch();
  const cookery = useSelector((state: RootState) => state.cookery);

  const fetchData = async () => {
    fetch("/api/images/get-food-images")
      .then((res) => res.json())
      .then((ids) => {
        dispatch(setIds({ ids: ids }));
      });
  };

  if (cookery.length === 0) {
    fetchData();
  }

  console.log(cookery);

  const posts = [...cookery];

  if (posts.length === 0) {
    return (
      <div className={styles.background}>
        <div className={styles.title}>
          Just a home chef that needs to serve his family every day👨🏻‍🍳
        </div>
        <div className={styles.loading}>
          <Image src={Loading.src} width={200} height={200} priority={true} />
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
