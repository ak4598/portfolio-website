import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/photography.module.css";
import { earth } from "../../../assets/images";
import locations from "../../../assets/data/places.json";

const Photography = () => {
  let Globe = () => null;

  if (typeof window !== "undefined") {
    Globe = require("react-globe.gl").default;
  }

  const earthRef = useRef<HTMLDivElement | null>(null);
  const [places, setPlaces] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState<string>(earth.src);

  const enlargeFactor = 1.8;
  const [earthSize, setEarthSize] = useState<number>(
    window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
      ? window.innerWidth * enlargeFactor
      : window.innerHeight * enlargeFactor
  );

  const handleResize = () => {
    setEarthSize(
      window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
        ? window.innerWidth * enlargeFactor
        : window.innerHeight * enlargeFactor
    );
  };

  useEffect(() => {
    setImageUrl(earth.src);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const visited = [
    "Iceland",
    "Switzerland",
    "Netherlands",
    "Hong Kong S.A.R.",
    "United Kingdom",
    "Belgium",
  ];

  const filteredData = locations.features.filter((f) =>
    visited.includes(f.properties.adm0name)
  );

  useEffect(() => {
    // load data
    setPlaces(
      filteredData.map((f) => ({
        lat: f.properties.latitude,
        lng: f.properties.longitude,
        name: f.properties.name,
        adm0name: f.properties.adm0name,
      }))
    );
  }, []);

  return (
    <div className={styles.scene}>
      <div className={styles.images}></div>
      <div className={styles.earth}>
        <Globe
          //@ts-ignore
          ref={earthRef}
          width={earthSize}
          height={earthSize}
          backgroundColor={"rgba(0,0,0,0)"}
          globeImageUrl={imageUrl}
          rendererConfig={{ preserveDrawingBuffer: true }}
          htmlElementsData={places}
          htmlElement={(d) => {
            const el = document.createElement("div");
            el.className = styles.mapMarker;

            el.style["pointer-events"] = "auto";
            el.style.cursor = "pointer";
            el.onclick = () => console.info(d.name);

            return el;
          }}
        />
      </div>
    </div>
  );
};

export default Photography;
