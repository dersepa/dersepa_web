import React, { useState } from "react";
import Leftbox from "../LeftBox/index";
// import Itemslist from "./Itemslist";
import { Container } from "reactstrap";

import dynamic from "next/dynamic";

const Itemslist = dynamic(() => import("./Itemslist.js"));

const AdHoc = () => {
  const [filter, setFilter] = useState("");
  const [language, setLanguage] = useState("");
  return (
    <Container fluid className="px-0">
      <Leftbox setLanguage={setLanguage} setFilter={setFilter} />
      <Itemslist language={language} filter={filter} />
    </Container>
  );
};

export default AdHoc;
