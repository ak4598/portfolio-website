import React from "react";
import Image from "next/image";
import about1 from "../../assets/images/about1.jpg";
import styles from "./styles/about.module.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <ParallaxProvider>
      <Parallax>
        <Image src={about1.src} layout="fill" objectFit="cover" quality={100} />
      </Parallax>
    </ParallaxProvider>
  );
};

export default About;
