import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/photography.module.css";
import { earth } from "../../../assets/images";
import locations from "../../../assets/data/places.json";
import dynamic from "next/dynamic";

const Globe = dynamic(
  () => {
    return import("react-globe.gl");
  },
  { ssr: false }
);

const Photography: NextPage = () => {
  // let Globe = () => null;
  // const Globe = require("react-globe.gl").default;

  const earthRef = useRef<HTMLDivElement | null>(null);

  const start = useRef<HTMLDivElement | null>(null);
  const gallery = useRef<HTMLDivElement | null>(null);

  const [places, setPlaces] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState<string>(earth.src);

  const enlargeFactor = 1.8;
  const [earthSize, setEarthSize] = useState<number | null>(null);

  // window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
  // ? window.innerWidth * enlargeFactor
  // : window.innerHeight * enlargeFactor

  const handleResize = () => {
    setEarthSize(
      window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
        ? window.innerWidth * enlargeFactor
        : window.innerHeight * enlargeFactor
    );
  };

  useEffect(() => {
    setImageUrl(earth.src);
  });

  useEffect(() => {
    if (null !== earthRef.current) {
      (earthRef.current as any).controls().enableZoom = false;
    }
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
      <div className={styles.title}>
        I am an amateur photographer 📸
        <br />
        The world is my gallery 🌍
      </div>
      <div className={styles.item} id="start" ref={start}>
        <div>📸 🌍 👉🏻</div>
      </div>
      <div className={styles.images} ref={gallery}></div>
      <div className={styles.earth}>
        <Globe
          //@ts-ignore
          refs={earthRef}
          width={earthSize as number}
          height={earthSize as number}
          backgroundColor={"rgba(0,0,0,0)"}
          globeImageUrl={imageUrl}
          rendererConfig={{ preserveDrawingBuffer: true }}
          htmlElementsData={places}
          htmlElement={(d) => {
            const el = document.createElement("div");
            el.className = styles.mapMarker;
            //@ts-ignore
            el.style["pointer-events"] = "auto";
            el.style.cursor = "pointer";
            el.onclick = () => {
              if (null !== start.current && null !== gallery.current) {
                start.current.style.display = "none";
                gallery.current.style.display = "initial";
              }
            };
            return el;
          }}
        />
      </div>
    </div>
  );
};

export default Photography;
