import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/about.module.css";
import texture from "../../assets/images/Blue_Watercolor_Map_of_the_World.jpg";

const About = () => {
  let Globe = () => null;

  if (typeof window !== "undefined") {
    Globe = require("react-globe.gl").default;
  }

  const earth = useRef<HTMLDivElement | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    setImageUrl(texture.src);
  }, []);

  return (
    <div className={styles.scene}>
      <div className={styles.earth}>
        <Globe
          //@ts-ignore
          ref={earth}
          width={900}
          height={900}
          backgroundColor={"rgba(0,0,0,0)"}
          globeImageUrl={imageUrl}
          arcColor={"color"}
          arcDashGap={0.6}
          arcDashLength={0.3}
          arcDashAnimateTime={4000 + 500}
          rendererConfig={{ preserveDrawingBuffer: true }}
        />
      </div>
    </div>
  );
};

export default About;
