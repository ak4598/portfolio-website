import type { NextPage } from "next";
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  createRef,
} from "react";
import styles from "../styles/photography.module.css";
import { earth } from "../../../assets/images";
import locations from "../../../assets/data/places.json";
import dynamic from "next/dynamic";

// const Globe = dynamic(
//   () => {
//     return import("react-globe.gl");
//   },
//   { ssr: false }
// );

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

const visitedPlaces = filteredData.map((f) => ({
  lat: f.properties.latitude,
  lng: f.properties.longitude,
  name: f.properties.name,
  adm0name: f.properties.adm0name,
}));

const Photography: NextPage = () => {
  // const earthRef = useRef<HTMLDivElement | null>(null);
  const earthRef = createRef();

  const start = useRef<HTMLDivElement | null>(null);
  const gallery = useRef<HTMLDivElement | null>(null);

  const [places, setPlaces] = useState<any>(visitedPlaces);
  const [imageUrl, setImageUrl] = useState<string>(earth.src);
  const [cameraActive, setCameraActive] = useState(false);

  const enlargeFactor = 1.8;

  const [earthSize, setEarthSize] = useState<number | null>(null);

  const handleResize = () => {
    setEarthSize(
      window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
        ? window.innerWidth * enlargeFactor
        : window.innerHeight * enlargeFactor
    );
  };

  useEffect(() => {
    if (!earthRef.current) {
      setTimeout(() => setCameraActive(true), 1000); // Retry if globe hasn't rendered yet
    }
    if (earthRef.current && cameraActive) {
      (earthRef.current as any).controls().enableZoom = false;
      setCameraActive(false);
    }
  }, [earthRef.current, cameraActive]);

  useEffect(() => {
    setImageUrl(earth.src);
    setPlaces(visitedPlaces);
    setEarthSize(
      window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
        ? window.innerWidth * enlargeFactor
        : window.innerHeight * enlargeFactor
    );
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
          width={earthSize as number}
          height={earthSize as number}
          backgroundColor={"rgba(0,0,0,0)"}
          globeImageUrl={imageUrl}
          rendererConfig={{ preserveDrawingBuffer: true }}
          htmlElementsData={places}
          htmlElement={(d: any) => {
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
          ref={earthRef}
        />
      </div>
    </div>
  );
};

export default Photography;

const GlobeTmpl = dynamic(() => import("../../../components/Globe/GlobeTmpl"), {
  ssr: false,
});

const Globe = forwardRef((props: any, ref) => (
  <GlobeTmpl {...props} forwardRef={ref} />
));
