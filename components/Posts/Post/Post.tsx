import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Post.module.css";

type Props = {
  id: string;
};

const Post: React.FC<Props> = ({ id }) => {
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/images/get-image?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading || post === null)
    return (
      <div className={styles.card}>
        <div className={styles.image}>
          {/* <Image
            src={"null"}
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
          /> */}
        </div>
        <p>{null}</p>
      </div>
    );
  if (!isLoading) {
    if (post.length === 0) {
      return (
        <div className={styles.card}>
          <div className={styles.image}>
            {/* <Image
            src={"null"}
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
          /> */}
          </div>
          <p>{null}</p>
        </div>
      );
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={post.image}
          blurDataURL={post.image}
          placeholder="blur"
          width={500}
          height={500}
          objectFit="cover"
          quality={100}
        />
      </div>
      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
