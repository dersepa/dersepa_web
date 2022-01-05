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
        <title>Dersepa Studio - About us</title>
        <meta property="og:type" content="website" />
        <meta name="description" content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
        <meta property="og:title" content="Dersepa Studio - Brands and Web design at Dersepa.com" />
    </Head>
    </>
  );
}
