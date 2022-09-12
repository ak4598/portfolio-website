import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    );
  }
  // return (
  //   <div>
  //     <NavBar />
  //     <Component {...pageProps} />
  //   </div>
  // );
}

export default MyApp;
