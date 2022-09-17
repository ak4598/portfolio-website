import React from "react";
import styles from "./Post.module.css";

type Props = {
  image: string;
  caption: string;
};

const Post: React.FC<Props> = ({ image, caption }) => {
  return (
    <div className={styles.card}>
      <img src={image} />
      <p>caption</p>
    </div>
  );
};

export default Post;
