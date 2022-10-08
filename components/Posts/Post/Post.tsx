import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Post.module.css";
import NotFoundImg from "../../../assets/images/not_found.png";

type Props = {
  id: string;
};

const Post: React.FC<Props> = ({ id }) => {
  const [post, setPost] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/images/get-country-image?id=${id}`)
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
          <Image
            src={NotFoundImg.src}
            blurDataURL={NotFoundImg.src}
            placeholder="blur"
            width={540}
            height={675}
            objectFit="cover"
            quality={100}
          />
        </div>
        <p>Loading...</p>
      </div>
    );
  if (!isLoading) {
    if (post.length === 0) {
      return (
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={NotFoundImg.src}
              blurDataURL={NotFoundImg.src}
              placeholder="blur"
              width={540}
              height={675}
              objectFit="cover"
              quality={100}
            />
          </div>
          <p>Image not found</p>
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
          width={540}
          height={675}
          objectFit="cover"
          quality={100}
        />
      </div>
      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
