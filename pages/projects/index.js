import Projects from "../../components/Projects";
import ChatButton from "../../components/ChatButton";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../components/_utils";
import Head from "next/head";

function index() {
  useEffect(() => {
    // getAllIds();
  }, []);

  const getAllIds = async () => {
    try {
      const res = await axios.get(BASE_URL + "/Projects/allids");
      // console.log("res", res.data);
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <>
      <ChatButton />
      <Projects />
      <Head>
        <title>Dersepa Studio Projects - Brands and Web design</title>
        <meta property="og:type" content="website" />
        <meta name="description" content="Dersepa Studio - Brands and Web design taylored to you, with the best identity and UI and UX design can get today and for the future."
        />
        <meta property="og:title" content="Dersepa Studio - Brands and Web design at Dersepa.com" />
      </Head>
    </>
  );
}

export default index;
