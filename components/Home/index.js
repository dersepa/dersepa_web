import React, { useState } from "react";
import Leftbox from "../LeftBox";
// import Itemslist from "./itemListTry";
import { Container } from "reactstrap";
import dynamic from "next/dynamic";

const Itemslist = dynamic(() => import("./itemListTry.js"));

const Home = () => {
  const [language, setLanguage] = useState("");
  return (
    <Container fluid className="px-0">
      <Leftbox setLanguage={setLanguage} />
      <Itemslist language={language} />
    </Container>
  );
};

export default Home;
