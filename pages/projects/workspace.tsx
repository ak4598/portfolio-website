import React from "react";
import type { NextPage } from "next";
import styles from "./styles/workspace.module.css";

const Workspace: NextPage = () => {
  return (
    <div>
      <div className={styles.background}></div>
      <div className={styles.title}>Workspace</div>
    </div>
  );
};

export default Workspace;
