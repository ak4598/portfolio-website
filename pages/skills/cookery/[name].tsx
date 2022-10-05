import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/recipe.module.css";

const Recipe: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.background}>
        <span></span>
        <span></span>
      </div>
      <div className={styles.title}>{router.query.name}</div>
    </div>
  );
};

export default Recipe;
