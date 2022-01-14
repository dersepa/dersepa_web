import React, { useState } from "react";
// import StudioContent from "../../components/Studio/StudioContent";
import Leftbox from "../../components/LeftBox/index";
import StudioImages from "../../components/Studio/StudioImage";
import ChatButton from "../../components/ChatButton";
import Head from "next/head";

export default function Studio() {
  const [language, setLanguage] = useState("");
  return (
    <>
    <div>
      <Leftbox setLanguage={setLanguage} />
      <ChatButton language={language} />
      <StudioImages />
    </div>
    <Head>
        <title>About us - Dersepa Studio story, vision and services</title>
        <meta property="og:type" content="website" />
        <meta name="description" content="About us - Design Studio. See how to create brands and custom websites ad Dersepa.com"
        />
        <meta property="og:title" content="About us - Design Studio. See how to create brands and custom websites at Dersepa.com" />
        <meta property="og:url" content="https://www.dersepa.com/studio/" />
    </Head>
    </>
  );
}
