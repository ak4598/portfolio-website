import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/cookery.module.css";

const Cookery: NextPage = () => {
  return (
    <div>
      <div className={styles.background}>
        {/* <span></span>
        <span></span> */}
      </div>
      <div className={styles.title}>Cookery</div>
    </div>
  );
};

export default Cookery;
