import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FoodCard.module.css";
import { Loading } from "../../assets/OtherLogos/index";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fillData } from "../../store/slices/cookerySlice";

type Props = {
  id: string;
};

// const FoodCard: React.FC<any> = (post) => {
const FoodCard: React.FC<Props> = ({ id }) => {
  // const [post, setPost] = useState<any>(null);
  // const [isLoading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const cookery = useSelector((state: RootState) => state.cookery);

  const post = cookery.find((i) => i._id === id);

  const recipeLink = `/skills/cookery/${post?._id}`;
  //
  const fetchData = async () => {
    fetch(`/api/images/get-food-image?id=${post?._id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fillData(data));
      });
  };

  if (post?.name === null) {
    fetchData();
  }

  // console.log(post);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch(`/api/images/get-food-image?id=${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPost(data);
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (isLoading || post === null) {
  if (post?.name === null) {
    return (
      <div className={styles.card}>
        <div className={styles.loadingContainer}>
          <Image
            src={Loading.src}
            className={styles.loading}
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
          //@ts-ignore
          src={post?.image}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.description}>
          <p>{post?.cuisine}</p>
          <h1>{post?.name}</h1>
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
