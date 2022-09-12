import type { NextPage } from "next";
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  createRef,
  useCallback,
} from "react";
import styles from "../styles/photography.module.css";
import { earth } from "../../../assets/images";
import locations from "../../../assets/data/places.json";
import dynamic from "next/dynamic";

const GlobeTmpl = dynamic<any>(
  () => import("../../../components/Globe/GlobeTmpl"),
  {
    ssr: false,
  }
);

GlobeTmpl.displayName = "GlobeTmpl";

const Globe = forwardRef((props: any, ref) => (
  <GlobeTmpl {...props} forwardRef={ref} />
));

Globe.displayName = "Globe";

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
  const earthRef = createRef();

  const start = useRef<HTMLDivElement | null>(null);
  const gallery = useRef<HTMLDivElement | null>(null);

  const [places, setPlaces] = useState<any>(visitedPlaces);
  const [imageUrl, setImageUrl] = useState<string>(earth.src);
  const [cameraActive, setCameraActive] = useState(false);
  const [countries, setCountries] = useState({ features: [] });
  const [hover, setHover] = useState<boolean | null>();

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
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  const onHoverHandler = useCallback((polygon: any) => {
    if (polygon !== null) {
      setHover(polygon.properties.ISO_A3);
    } else {
      setHover(null);
    }
  }, []);

  const onClickHandler = useCallback((event: any) => {
    console.log(event.properties.NAME);
    if (null !== start.current && null !== gallery.current) {
      start.current.style.display = "none";
      gallery.current.style.display = "initial";
    }
  }, []);

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
          ref={earthRef}
          width={earthSize as number}
          height={earthSize as number}
          backgroundColor={"rgba(0,0,0,0)"}
          globeImageUrl={imageUrl}
          rendererConfig={{ preserveDrawingBuffer: true }}
          polygonsData={countries.features.filter(
            (d: any) => d.properties.ISO_A2 !== "AQ"
          )}
          polygonAltitude={0.01}
          polygonCapColor={(d: any) =>
            d.properties.ISO_A3 === hover
              ? "rgba(255, 255,255, 0.3)"
              : "rgba(255, 255,255, 0)"
          }
          polygonSideColor={() => "rgba(255, 255, 255, 0)"}
          onPolygonHover={onHoverHandler}
          onPolygonClick={onClickHandler}
        />
      </div>
    </div>
  );
};

export default Photography;
