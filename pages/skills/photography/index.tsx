import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/photography.module.css";
import texture from "../../../assets/images/Blue_Watercolor_Map_of_the_World.jpg";

const Photography = () => {
  let Globe = () => null;

  if (typeof window !== "undefined") {
    Globe = require("react-globe.gl").default;
  }

  const earth = useRef<HTMLDivElement | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(texture.src);

  useEffect(() => {
    setImageUrl(texture.src);
  }, []);

  return (
    <div className={styles.scene}>
      <div className={styles.earth}>
        <Globe
          //@ts-ignore
          ref={earth}
          width={1800}
          height={1800}
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

export default Photography;
