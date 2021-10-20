// import "./Studio.module.css";
import MyNavbar from "../Navbar/Navbar";
import { Row, Col } from "reactstrap";

export default function ProjectContent() {
  return (
    <div className="leftBox animate__animated animate__fadeIn">
      <MyNavbar />
      <Row className="leftRow">
        <Col xs={12}>
          <p>
            We see, live and breath all about brand identity, from the pixel
            perfect, print detail to the invention of unique brands! Details
            matter as well the type of brand you are or wanna be. We’ll help you
            to give identity to that. We master Brand creations, App & Website
            conception and any communication piece online or print. If this is
            something you can relate with, say hi!
          </p>
        </Col>
      </Row>
      <div className="footer">
        <Row>
          <Col xs={12} sm={10}>
            <p style={{}}>
              &#169; Dersepa.com, all rights reserved!{" "}
              <span> Say hi designe-se@dersepa.com</span>
            </p>
          </Col>
          <Col className="px-0" xs={12} sm={2}>
            <p className="hoverEffect float-right mr-2">
              <strong>en</strong>
            </p>
            <p className="hoverEffect float-right mr-3">
              <strong>pt</strong>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
