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
        <meta property="og:description" content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
        <meta property="og:title" content="Dersepa Studio - Brands and Web design at Dersepa.com" />
        <meta name="description" content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
        <meta property="og:url" content="https://www.dersepa.com/contact/" />
      </Head>
    </>
  );
}
