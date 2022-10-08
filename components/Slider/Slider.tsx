import React from "react";
import styles from "./Slider.module.css";

type Props = {
  cards: any[];
};

const Slider: React.FC<Props> = ({ cards }) => {
  return (
    <ul className={styles.container}>
      {cards.map((card, idx) => (
        <li key={idx as unknown as string}>{card}</li>
      ))}
    </ul>
  );
};

export default Slider;
