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
        <title>Brand and web design projects, built with best custom design by Dersepa.com</title>
        <meta property="og:type" content="website" />
        <meta name="description" content="Brand and web design projects, built with best custom design"
        />
        <meta property="og:title" content="Brand and web design projects, built with best custom design by Dersepa.com" />
      </Head>
    </>
  );
}

export default index;
