import React from "react";
import type { NextPage } from "next";
import styles from "./styles/personal.module.css";

const Personal: NextPage = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.title}>Personal</div>
    </div>
  );
};

export default Personal;
