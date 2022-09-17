import React, { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";

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
        <NavBar />
        <Component {...pageProps} />
      </SessionProvider>
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
