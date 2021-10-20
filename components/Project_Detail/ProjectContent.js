import { useState, useEffect } from "react";
import "./Project_Detail.module.css";
import MyNavbar from "../Navbar/Navbar";
import { Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Content from "../content.json";

const ProjectContent = (props) => {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    // console.log(props);
    localStorage.getItem("language")
      ? setLanguage(localStorage.getItem("language"))
      : setLanguage("en");
    props.setLanguage(localStorage.getItem("language"));
  }, []);

  const changeLanguage = (e) => {
    setLanguage(e);
    props.setLanguage(e);
    localStorage.setItem("language", e);
  };

  return (
    <div className="leftBox scrolledit animate__animated animate__fadeIn">
      <MyNavbar setLanguage={setLanguage} />
      <Row className="leftRow">
        <Col xs={12}>
          <p
            onClick={() => router.push("/projects")}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={"hoverEffect pl-0 pr-3 back-btn"}
            style={hover ? { color: "#9F9D8C" } : null}
          >
            Back
          </p>
          <h2 className="main-heading">
            <strong>
              {language === "pt"
                ? props.project.title_portuguese
                : props.project.title}
            </strong>
          </h2>
          <div style={{ color: "#707070" }}>
            <p>
              areas <br />
              <span>
                <strong>{props.project.areas}</strong>
              </span>
            </p>
            {props.project.website == "-" ? (
              <></>
            ) : (
              <p>
                website <br />
                <span>
                  <strong>
                    <a
                      style={{ color: "#707070" }}
                      href={
                        props.project.website
                          ? props.project.website.split("|")[0]
                          : ""
                      }
                      target="_blank"
                    >
                      {props.project.website
                        ? props.project.website.split("|")[1]
                        : ""}
                    </a>
                  </strong>
                </span>
              </p>
            )}
            <div
              className=""
              style={{
                maxWidth: 500,
              }}
            >
              <hr className="mb-5" />
              <p>
                {language === "pt"
                  ? props.project.content_portuguese
                  : props.project.content}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="footerBar">
        <Row>
          <Col xs={10} sm={10}>
            <p>
              &#169;{" "}
              {language === "en" ? Content["footer"].en : Content["footer"].pt}
              <span>
                <strong>designe-se@dersepa.com</strong>
              </span>
            </p>
          </Col>
          <Col className="px-0" xs={2} sm={2}>
            <p
              onClick={() => changeLanguage("en")}
              className="hoverEffect float-right mr-2"
            >
              <strong>en</strong>
            </p>
            <p
              onClick={() => changeLanguage("pt")}
              className="hoverEffect float-right mr-3"
            >
              <strong>pt</strong>
            </p>
          </Col>
        </Row>
      </div>
      <style jsx>
        {`
          .scrolledit {
            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow-x: hidden;
            overflow-y: scroll;
          }
          .scrolledit::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default ProjectContent;
