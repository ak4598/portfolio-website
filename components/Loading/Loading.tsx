import React from "react";
import styles from "./Loading.module.css";

type Props = {
  loaderSize: number;
};

const Loading: React.FC<Props> = ({ loaderSize }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.loader}
        style={{ width: `${loaderSize}px`, height: `${loaderSize}px` }}
      >
        {[...Array(20)].map((id, idx) => (
          <span
            key={idx}
            style={{
              ["--i" as any]: idx + 1,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
