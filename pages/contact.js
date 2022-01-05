import Contact from "../components/Contact";
import ChatButton from "../components/ChatButton";
import Head from "next/head";

export default function contactus() {
  return (
    <>
      <Contact />
      <Head>
        <title>Dersepa Studio Contact - Brands and Web design</title>
        <meta property="og:type" content="website" />
      </Head>
    </>
  );
}
