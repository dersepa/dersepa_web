import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";
import ReactMarkdown from "react-markdown";
import { Spinner } from "reactstrap";
import MyNavbar from "../Navbar/Navbar";
import "./Adhoc_Detail.module.css";
import Content from "../content.json";
import { BASE_URL, PRIMARY_YELLOW } from "../_utils";

const ProjectContent = (props) => {
  // console.log("project data", props.project);
  // console.log("next project data", props.nextProject);
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    localStorage.getItem("language")
      ? setLanguage(localStorage.getItem("language"))
      : setLanguage("en");
  }, []);

  const changeLanguage = (e) => {
    setLanguage(e);
    localStorage.setItem("language", e);
  };

  const nextProjectClicked = (id, title) => {
    if (id) {
      router.push(`/ad-hoc/${title.split(" ").join("-")}_${id}`);
      // localStorage.setItem("projectId", id);
    }
  };

  return (
    <div className="leftBox scrolledit animate__animated animate__fadeIn">
      <MyNavbar />
      <Row className="leftRow">
        <Col xs={12}>
          <p
            onClick={() => router.push("/ad-hoc")}
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
              source <br />
              <span>
                <strong>
                  <a
                    style={{ color: "#707070" }}
                    href={
                      props.project.source
                        ? props.project.source.split("|")[0]
                        : ""
                    }
                    target="_blank"
                  >
                    {props.project.source
                      ? props.project.source.split("|")[1]
                      : ""}
                  </a>
                </strong>
              </span>
            </p>
            <p>
              areas <br />
              <span>
                <strong>{props.project.areas}</strong>
              </span>
            </p>
            <p>
              <span className="summary">
                {language === "pt"
                  ? props.project.summary_portuguese
                  : props.project.summary}
              </span>
            </p>
            <div className="pt-">
              <hr className="mb-5" />
              <Row style={{ margin: 0 }}>
                <Col xs={12} style={{ padding: 0 }} className="d-xs-block d-sm-none d-md-none d-lg-none d-xl-none">
                  <img
                    height="auto"
                    width="100%"
                    alt=""
                    className="bgImage"
                    src={BASE_URL + props.project.cover_image.url}
                  />
                </Col>
              </Row>
              <ReactMarkdown
                escapeHtml={false}
                className="markdownclass"
                transformImageUri={(uri) => `${BASE_URL + uri}`}
                source={
                  language === "pt"
                    ? props.project.content_portuguese
                    : props.project.content
                }
              />
              <hr className="mt-5" />
            </div>
            <div>
              <h3 className="seemslikeagoodone">Seems like a good one?</h3>
              <h3 className="letstalk">Let's talk</h3>
            </div>
          </div>
        </Col>
      </Row>
      {props.nextProject && props.nextProject.length !== 0 ? (
        <Row style={{ background: "#ffffff" }}>
          <Col
            style={{ cursor: "pointer" }}
            onClick={() =>
              nextProjectClicked(props.nextProject.id, props.nextProject.title)
            }
          >
            <p
              style={{
                fontSize: 20,
                marginBottom: 2,
                color: PRIMARY_YELLOW,
                fontWeight: "bold",
              }}
            >
              next project
            </p>
            <h2>{props.nextProject.title}</h2>
            <p>{props.nextProject.areas}</p>
            <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
              <img
                alt=""
                src={BASE_URL + props.nextProject.cover_image.url}
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
      ) : (
        // <Spinner style={{ width: "8rem", height: "8rem" }} color="warning" />
        ""
      )}
      <div className="footer">
        <Row>
          <Col xs={12} sm={10}>
            <p>
              {language === "en" ? Content["footer"].en : Content["footer"].pt}
              <span>
                <strong>designe-se@dersepa.com</strong>
              </span>
            </p>
          </Col>
          <Col className="px-0" xs={12} sm={2}>
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
