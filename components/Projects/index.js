import React, { useState } from "react";
import Leftbox from "../LeftBox";

// import Itemslist from "../Home/itemListTry";
import { Container } from "reactstrap";
import dynamic from "next/dynamic";

const Itemslist = dynamic(() => import("../Home/itemListTry.js"));

const Index = () => {
  const [filter, setFilter] = useState("");
  const [language, setLanguage] = useState("");
  return (
    <Container fluid className="px-0">
      <Leftbox setFilter={setFilter} setLanguage={setLanguage} />
      <Itemslist language={language} filter={filter} />
    </Container>
  );
};

export default Index;
