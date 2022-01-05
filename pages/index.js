import Home from "../components/Home";
import ChatButton from "../components/ChatButton";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/3c9606c9-3473-42d1-98f7-5f49377a0376/cd.js"
          type="text/javascript"
          async
        ></script>
        <title>Dersepa Studio - Brands and Web design</title>
        <meta property="og:type" content="website" />
      </Head>
      <ChatButton />
      <Home />
    </>
  );
}
