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
import dynamic from "next/dynamic";

// const GlobeTmpl = dynamic(() => import("../../../components/Globe/GlobeTmpl"), {
//   ssr: false,
// });

// GlobeTmpl.displayName = "GlobeTmpl";

// const Globe = forwardRef((props: any, ref) => (
//   <GlobeTmpl {...props} forwardRef={ref} />
// ));

// Globe.displayName = "Globe";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const Photography: NextPage = () => {
  // const earthRef = createRef();

  // const start = useRef<HTMLDivElement | null>(null);
  // const gallery = useRef<HTMLDivElement | null>(null);

  // const [title, setTitle] = useState<any>(
  //   <div>
  //     I am an amateur photographer 📸
  //     <br />
  //     The world is my gallery 🌍
  //   </div>
  // );

  // const [imageUrl, setImageUrl] = useState(earth.src);
  // const [cameraActive, setCameraActive] = useState<boolean>(false);
  // const [countries, setCountries] = useState({ features: [] });
  // const [hover, setHover] = useState<boolean | null>();
  // const [earthSize, setEarthSize] = useState<number | null>(null);

  // const enlargeFactor = 1.8;

  // const handleResize = () => {
  //   setEarthSize(
  //     window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
  //       ? window.innerWidth * enlargeFactor
  //       : window.innerHeight * enlargeFactor
  //   );
  // };

  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
  //   )
  //     .then((res) => res.json())
  //     .then((countries) => {
  //       setCountries(countries);
  //     });
  // }, []);

  // const onHoverHandler = useCallback((polygon: any) => {
  //   if (polygon !== null) {
  //     setHover(polygon.properties.ISO_A3);
  //   } else {
  //     setHover(null);
  //   }
  // }, []);

  // const onClickHandler = useCallback((event: any) => {
  //   setTitle(<div>{event.properties.NAME}</div>);
  //   if (null !== start.current && null !== gallery.current) {
  //     start.current.style.display = "none";
  //     gallery.current.style.display = "initial";
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!earthRef.current) {
  //     setTimeout(() => setCameraActive(true), 1000); // Retry if globe hasn't rendered yet
  //   }
  //   if (earthRef.current && cameraActive) {
  //     (earthRef.current as any).controls().enableZoom = false;
  //     setCameraActive(false);
  //   }
  // }, [earthRef.current, cameraActive]);

  // useEffect(() => {
  //   setImageUrl(earth.src);

  //   setEarthSize(
  //     window.innerWidth * enlargeFactor < window.innerHeight * enlargeFactor
  //       ? window.innerWidth * enlargeFactor
  //       : window.innerHeight * enlargeFactor
  //   );
  // });

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [handleResize]);

  return (
    <div className={styles.scene}>
      <div className={styles.title}>
        {/* I am an amateur photographer 📸
        <br />
        The world is my gallery 🌍 */}
        {/* {title} */}
      </div>
      {/* <div className={styles.item} id="start" ref={start}>
        <div>📸 🌍 👉🏻</div>
      </div>
      <div className={styles.images} ref={gallery}></div> */}
      <div className={styles.earth}>
        <Globe />
        {/* <Globe
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
        /> */}
      </div>
    </div>
  );
};

export default Photography;
