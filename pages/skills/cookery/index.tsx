import React, { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import styles from "../styles/cookery.module.css";
import FoodCard from "../../../components/FoodCard/FoodCard";

import { useQuery } from "react-query";

import Image from "next/image";
import { Loading } from "../../../assets/OtherLogos";

import shuffle from "../../../utils/shuffle";

type Props = {
  posts: any;
};

// const Cookery: React.FC<Props> = ({ posts }) => {
const Cookery: NextPage = () => {
  const [posts, setPosts] = useState<any>(null);
  // const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    fetch("/api/images/get-food-images")
      .then((res) => res.json())
      .then((id) => {
        shuffle(id);
        setPosts(id);
        // setLoading(false);
      });
  };

  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["posts"],
    fetchData,
    { staleTime: 60000 }
  );

  console.log();

  // useEffect(() => {
  //   setLoading(true);
  //   fetchData();
  // }, []);

  if (isLoading || posts === null) {
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // Fetch data from external API

//   const host = context.req.headers.host;
//   const res = await fetch(`http://${host}/api/images/get-food-images`);
//   const data = await res.json();
//   const posts = shuffle(data);

//   // Pass data to the page via props
//   return { props: { posts } };
// };
