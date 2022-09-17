import React from "react";
import Image from "next/image";
import styles from "./Post.module.css";

type Props = {
  image: string;
  caption: string;
};

const Post: React.FC<Props> = ({ image, caption }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={image}
          width={500}
          height={500}
          objectFit="cover"
          quality={100}
        />
      </div>
      <p>{caption}</p>
    </div>
  );
};

export default Post;
