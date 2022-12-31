import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";

import { QueryClient, QueryClientProvider } from "react-query";

import { store } from "../store/store";
import { Provider } from "react-redux";

function Loading(): any {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading && <></>;
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  const queryClient = new QueryClient();

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
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Loading />
          <SessionProvider session={session}>
            <Head>
              <title>Andy Kwan</title>
            </Head>
            <NavBar />
            <Component {...pageProps} />
          </SessionProvider>
        </QueryClientProvider>
      </Provider>
    );
  }
}

export default MyApp;
