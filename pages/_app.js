import React, { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import NextNprogress from 'nextjs-progressbar';
// import * as serviceWorker from "../public/sw";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#312F1E",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            // console.log(
            //   "Service Worker registration successful with scope: ",
            //   registration.scope
            // );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <NextNprogress
        color="#ffc600"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Head>
        <meta property="og:url" content="https://www.dersepa.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" />
        <meta
          property="og:title"
          content="Dersepa Studio - Brands and Web design at Dersepa.com"
        />
        <meta
          property="og:description"
          content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
        <meta
          property="og:site_name"
          content="Dersepa Studio - Brands and Web design"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1,maximum-scale=5 width=device-width"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="favicon.ico" />
        <link
          href="/dersepa-icon_web_hi_res_152.png"
          sizes="152x152"
          rel="apple-touch-icon"
        />
        <link
          href="/dersepa-icon_web_hi_res_114.png"
          sizes="114x114"
          rel="apple-touch-icon"
        />
        <link href="/dersepa-icon_web_hi_res_57.png" rel="apple-touch-icon" />
        <link
          href="/dersepa-icon_web_hi_res_76.png"
          sizes="76x76"
          rel="apple-touch-icon"
        />
        <link
          href="/dersepa-icon_web_hi_res_60.png"
          sizes="60x60"
          rel="apple-touch-icon"
        />
        <link
          href="/dersepa-icon_web_hi_res_72.png"
          sizes="72x72"
          rel="apple-touch-icon"
        />
        <link
          href="/dersepa-icon_web_hi_res_180.png"
          sizes="180x180"
          rel="apple-touch-icon"
        />
        <link
          href="/dersepa-icon_web_hi_res_120.png"
          sizes="120x120"
          rel="apple-touch-icon"
        />

        <meta http-equiv="Content-Type" content="text/html; charSet=utf-8" />

        <link rel="manifest" href="manifest.json" />

        <meta name="msapplication-config" content="none" />

        <meta name="theme-color" content="#FFC600" />

        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <meta name="apple-mobile-web-app-title" content="Dersepa" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
        <meta name="robots" content="index,follow,noodp" />

        <meta content="en" name="language" />

        <link rel="stylesheet" href="https://use.typekit.net/fog2ydr.css" />

        <link
          rel="preload"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          as="style"
          media="print"
          onload="this.media='all'"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
          as="style"
          media="print"
          onload="this.media='all'"
        />
      </Head>
      <GoogleReCaptchaProvider reCaptchaKey="6Lc7XaUZAAAAAGx94rlPvfN_9OSIP8wOs2dGRYip">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleReCaptchaProvider>
    </React.Fragment>
  );
}

export default MyApp;
