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
    </Head>
    </>
  );
}
