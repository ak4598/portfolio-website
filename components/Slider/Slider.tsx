import React from "react";
import styles from "./Slider.module.css";

type Props = {
  cards: any[];
};

const Slider: React.FC<Props> = ({ cards }) => {
  return (
    <div className={styles.tmp}>
      <span className={styles.arrowLeft}></span>
      <ul className={styles.container}>
        {cards.map((card, idx) => (
          <li key={idx as unknown as string}>{card}</li>
        ))}
      </ul>
      <span className={styles.arrowRight}></span>
    </div>
  );
};

export default Slider;
