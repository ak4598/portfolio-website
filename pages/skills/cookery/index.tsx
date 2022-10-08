import React, { forwardRef, createRef, useState } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/cookery.module.css";

import FoodCard from "../../../components/FoodCard/FoodCard";

import img from "../../../photos/Cookery/3-Cup Chicken Wings.jpg";
import img2 from "../../../photos/Cookery/Boeuf Bourgignon.jpg";
import img3 from "../../../photos/Cookery/Carbonara.jpg";
import img4 from "../../../photos/Cookery/Creamy Salmon Tagliatelle.jpg";
import img5 from "../../../photos/Cookery/Kaisen Donburi.jpg";
import img6 from "../../../photos/Cookery/Katsudon.jpg";
import img7 from "../../../photos/Cookery/Lemon Chicken.jpg";
import img8 from "../../../photos/Cookery/Mussels in Lemon Garlic-Butter Sauce.jpg";
import img9 from "../../../photos/Cookery/Pan Fried  Yellow Croaker.jpg";
import img10 from "../../../photos/Cookery/Red Prawn and Scallop Risotto.jpeg";
import img11 from "../../../photos/Cookery/Tamago Sando.jpg";

import img12 from "../../../photos/Cookery/Tomato and Egg Stir-Fry.jpg";

const Cookery: NextPage = () => {
  const [goToSlide, setGoToSlide] = useState<number>(0);

  const imgs = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        Just a home chef that needs to serve his family everyday👨🏻‍🍳
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {imgs.map((img, idx) => (
            <FoodCard key={idx} cuisine={""} name={""} image={img.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cookery;
