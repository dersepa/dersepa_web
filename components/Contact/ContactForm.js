import React from "react";
import { Row, Col } from "reactstrap";
// import "./Contact.css";
import Form from "../ChatButton/Form";

const ContactForm = (props) => {
  return (
    <div className="formContainer">
      <Row className="mx-0" style={{ height: "100vh" }}>
        <Col className="my-lg-auto" xs={12} sm={{ offset: 3, size: 6 }}>
          <Form language={props.language} />
        </Col>
      </Row>
      <style jsx>{`
        @media only screen and (max-width: 1000px) {
          .formContainer {
            margin-top: 10%;
          }
        }

        @media only screen and (min-width: 1000px) {
          .formContainer {
            margin-left: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
