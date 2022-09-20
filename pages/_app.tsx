import React, { useState, useEffect } from "react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
      <SessionProvider session={session}>
        <ParallaxProvider>
          <Head>
            <title>Andy Kwan</title>
          </Head>
          <NavBar />
          <Component {...pageProps} />
        </ParallaxProvider>
      </SessionProvider>
    );
  }
}

export default MyApp;
