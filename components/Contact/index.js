import React, { useState } from "react";
import Leftbox from "../LeftBox";
import ContactForm from "./ContactForm";
import { Container } from "reactstrap";

const Contact = () => {
  const [language, setLanguage] = useState("");
  return (
    <Container fluid className="px-0">
      <Leftbox setLanguage={setLanguage} />
      <ContactForm language={language} />
    </Container>
  );
};

export default Contact;
