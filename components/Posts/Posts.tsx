import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

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
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [country]);

  if (isLoading || posts === null)
    return <div className={styles.title}>Loading...</div>;
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
          <Post image={post.image} caption={post.caption} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
