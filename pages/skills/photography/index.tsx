import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/photography.module.css";
import { earth } from "../../../assets/images";

const Photography = () => {
  let Globe = () => null;

  if (typeof window !== "undefined") {
    Globe = require("react-globe.gl").default;
  }

  const earthRef = useRef<HTMLDivElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(earth.src);

  const [earthSize, setEarthSize] = useState(
    window.innerWidth * 1.8 < window.innerHeight * 1.8
      ? window.innerWidth * 1.8
      : window.innerHeight * 1.8
  );

  const handleResize = () => {
    setEarthSize(
      window.innerWidth * 1.8 < window.innerHeight * 1.8
        ? window.innerWidth * 1.8
        : window.innerHeight * 1.8
    );
  };

  useEffect(() => {
    setImageUrl(earth.src);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className={styles.scene}>
      <div className={styles.earth}>
        <Globe
          //@ts-ignore
          ref={earthRef}
          width={earthSize}
          height={earthSize}
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
