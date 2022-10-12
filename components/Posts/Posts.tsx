import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";
import shuffle from "../../utils/shuffle";
import Image from "next/image";
import { Loading } from "../../assets/OtherLogos/index";

type Props = {
  country: string;
};

const Posts: React.FC<Props> = ({ country }) => {
  const [posts, setPosts] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/images/get-country-images?country=${country}`)
      .then((res) => res.json())
      .then((id) => {
        shuffle(id);
        setPosts(id);
        setLoading(false);
      });
  }, [country]);

  if (isLoading || posts === null)
    return (
      <div className={styles.title}>
        <Image src={Loading.src} width={200} height={200} priority={true} />
      </div>
    );

  if (!isLoading) {
    if (posts.length === 0) {
      return (
        <div className={styles.title}>
          My dream is to travel around the world 🤩 <br />I promise, you are
          going to see my work 🤣
        </div>
      );
    }
  }

  return (
    <div className={styles.grid}>
      {posts.map((post: any) => (
        <div key={post._id} className={styles.post}>
          <Post id={post._id} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
