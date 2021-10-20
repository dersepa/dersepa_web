import React, { useState, useEffect, Fragment } from "react";
import MyNavbar from "../Navbar/Navbar";
import { Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { BASE_URL, PRIMARY_YELLOW } from "../_utils";
import Content from "../content.json";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import axios from "axios";

const leftBox = (props) => {
  const [activeFilterP, setActiveFilterP] = useState(0);
  const [activeFilterA, setActiveFilterA] = useState(null);
  const [language, setLanguage] = useState("");
  const [projectAreas, setProjectAreas] = useState({});
  const [adhocAreas, setAdhocAreas] = useState({});
  const [content, setContent] = useState([]);

  const [sayhiHover, setSayhiHover] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    localStorage.getItem("language")
      ? setLanguage(localStorage.getItem("language"))
      : setLanguage("en");
    props.setLanguage(localStorage.getItem("language"));

    localStorage.getItem("projectAreas")
      ? setProjectAreas(JSON.parse(localStorage.getItem("projectAreas")))
      : null;

    localStorage.getItem("adhocAreas")
      ? setAdhocAreas(JSON.parse(localStorage.getItem("adhocAreas")))
      : null;

    getContent();
  }, []);

  const getContent = async () => {
    let response = await axios.get(`${BASE_URL}/leftbox`);
    setContent(response.data);
  };

  const changeLanguage = (e) => {
    setLanguage(e);
    props.setLanguage(e);
    localStorage.setItem("language", e);
  };

  const filterProject = (f) => {
    props.setFilter(f);
  };

  let BG_COLOR =
    pathname === "/"
      ? "#FFC600"
      : pathname === "/contact" || pathname === "/studio"
      ? "#312F1E"
      : pathname === "/projects" || pathname === "/ad-hoc"
      ? "#F8F7F7"
      : null;
  return (
    <div className="leftBox animate__animated animate__fadeIn">
      <MyNavbar language={language} setLanguage={setLanguage} />
      {content.length !== 0 ? (
        <Row style={{ height: "70%" }} className="leftRow">
          <Col className="my-auto pr-sm-5" xs={12}>
            {pathname === "/" ? (
              <div className="content">
                {content.home.split("\n").map((element, index) => {
                  return (
                    <Fragment key={index}>
                      {language === "en" &&
                      content.home.split("\n")[0 + index * 3] !== undefined ? (
                        <h1 className="main-heading">
                          {content.home.split("\n")[0 + index * 3]}
                        </h1>
                      ) : (
                        <h1 className="main-heading">
                          {content.home_portuguese.split("\n")[0 + index * 3]}
                        </h1>
                      )}

                      {language === "en" &&
                      content.home.split("\n")[1 + index * 3] !== undefined ? (
                        <h1 className="main-heading">
                          {content.home.split("\n")[1 + index * 3]}
                        </h1>
                      ) : (
                        <h1 className="main-heading">
                          {content.home_portuguese.split("\n")[1 + index * 3]}
                        </h1>
                      )}

                      {language === "en" &&
                      content.home.split("\n")[2 + index * 3] !== undefined ? (
                        <h1 className="text-white main-heading ">
                          {content.home.split("\n")[2 + index * 3]}
                        </h1>
                      ) : (
                        <h1 className="text-white main-heading ">
                          {content.home_portuguese.split("\n")[2 + index * 3]}
                        </h1>
                      )}
                    </Fragment>
                  );
                })}
                <Link href="/contact">
                  {language === "en" ? (
                    <h1
                      onMouseEnter={() => setSayhiHover(true)}
                      onMouseLeave={() => setSayhiHover(false)}
                      style={{ color: sayhiHover ? "#9f9d8c" : "white" }}
                      className="hoverEffect main-heading mb-3"
                    >
                      <u>Say hello!</u>
                    </h1>
                  ) : (
                    <h1
                      style={{ color: sayhiHover ? "#9f9d8c" : "white" }}
                      onMouseEnter={() => setSayhiHover(true)}
                      onMouseLeave={() => setSayhiHover(false)}
                      className="hoverEffect main-heading mb-3"
                    >
                      <u>Diga olá!</u>
                    </h1>
                  )}
                </Link>
              </div>
            ) : pathname === "/contact" ? (
              <div className="content">
                {content.contact.split("\n").map((element, index) => {
                  return (
                    <Fragment key={index}>
                      {language === "en" &&
                      content.contact.split("\n")[0 + index * 2] !==
                        undefined ? (
                        <h1 className="text-white main-heading">
                          {content.contact.split("\n")[0 + index * 2]}
                        </h1>
                      ) : (
                        <h1 className="text-white main-heading">
                          {
                            content.contact_portuguese.split("\n")[
                              0 + index * 2
                            ]
                          }
                        </h1>
                      )}

                      {language === "en" &&
                      content.contact.split("\n")[1 + index * 2] !==
                        undefined ? (
                        <h1
                          className="main-heading mb-3"
                          style={{ color: PRIMARY_YELLOW }}
                        >
                          {content.contact.split("\n")[1 + index * 2]}
                        </h1>
                      ) : (
                        <h1
                          className="main-heading mb-3"
                          style={{ color: PRIMARY_YELLOW }}
                        >
                          {
                            content.contact_portuguese.split("\n")[
                              1 + index * 2
                            ]
                          }
                        </h1>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            ) : pathname === "/studio" ? (
              <div className="content">
                {content.studio.split("\n").map((element, index) => {
                  return (
                    <Fragment key={index}>
                      {language === "en" &&
                      content.studio.split("\n")[0 + index * 3] !==
                        undefined ? (
                        <div
                          style={{ fontSize: "20px", fontWeight: "300" }}
                          className="text-white"
                        >
                          <p>{content.studio.split("\n")[0 + index * 3]}</p>
                        </div>
                      ) : (
                        <div
                          style={{ fontSize: "20px", fontWeight: "300" }}
                          className="text-white"
                        >
                          <p>
                            {
                              content.studio_portuguese.split("\n")[
                                0 + index * 3
                              ]
                            }
                          </p>
                        </div>
                      )}

                      {language === "en" &&
                      content.studio.split("\n")[1 + index * 3] !==
                        undefined ? (
                        <div
                          style={{ fontSize: "20px", fontWeight: "300" }}
                          className="text-white"
                        >
                          <p>{content.studio.split("\n")[1 + index * 3]}</p>
                        </div>
                      ) : (
                        <div
                          style={{ fontSize: "20px", fontWeight: "300" }}
                          className="text-white"
                        >
                          <p>
                            {
                              content.studio_portuguese.split("\n")[
                                1 + index * 3
                              ]
                            }
                          </p>
                        </div>
                      )}

                      {language === "en" &&
                      content.studio.split("\n")[2 + index * 3] !==
                        undefined ? (
                        <h1
                          className=" mb-3"
                          style={{ color: PRIMARY_YELLOW, fontSize: "30px" }}
                        >
                          {content.studio.split("\n")[2 + index * 3]}
                        </h1>
                      ) : (
                        <h1
                          className=" mb-3"
                          style={{ color: PRIMARY_YELLOW, fontSize: "30px" }}
                        >
                          {content.studio_portuguese.split("\n")[2 + index * 3]}
                        </h1>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            ) : pathname === "/projects" ? (
              <div className="content">
                <div className="pb-4">
                  <Nav>
                    <NavItem>
                      <p
                        onClick={() => filterProject("")}
                        onMouseDown={() => setActiveFilterP(0)}
                        className={
                          activeFilterP === 0
                            ? "hoverEffect pl-0 pr-3 nav-links text-decoration-none active-link"
                            : "hoverEffect pl-0 pr-3 nav-links text-decoration-none"
                        }
                      >
                        {language === "en" ? "All" : "Todos"}
                      </p>
                    </NavItem>
                    {Object.keys(projectAreas).map((area, index) => {
                      return (
                        <NavItem key={index}>
                          <p
                            onClick={() =>
                              filterProject(projectAreas[area].toLowerCase())
                            }
                            onMouseDown={() => setActiveFilterP(index + 1)}
                            className={
                              activeFilterP === index + 1
                                ? "hoverEffect pl-0 pr-3 nav-links text-decoration-none active-link"
                                : "hoverEffect pl-0 pr-3 nav-links text-decoration-none"
                            }
                          >
                            {projectAreas[area]}
                          </p>
                        </NavItem>
                      );
                    })}
                  </Nav>
                </div>
                {content.projects.split("\n").map((element, index) => {
                  return (
                    <Fragment key={index}>
                      {language === "en" &&
                      content.projects.split("\n")[0 + index * 3] !==
                        undefined ? (
                        <h1 className="main-heading">
                          {content.projects.split("\n")[0 + index * 3]}
                        </h1>
                      ) : (
                        <h1 className="main-heading">
                          {
                            content.projects_portuguese.split("\n")[
                              0 + index * 3
                            ]
                          }
                        </h1>
                      )}

                      {language === "en" &&
                      content.projects.split("\n")[1 + index * 3] !==
                        undefined ? (
                        <h1
                          className="main-heading mb-3"
                          style={{ color: PRIMARY_YELLOW }}
                        >
                          {content.projects.split("\n")[1 + index * 3]}
                        </h1>
                      ) : (
                        <h1
                          className="main-heading mb-3"
                          style={{ color: PRIMARY_YELLOW }}
                        >
                          {
                            content.projects_portuguese.split("\n")[
                              1 + index * 3
                            ]
                          }
                        </h1>
                      )}

                      {language === "en" &&
                      content.projects.split("\n")[2 + index * 3] !==
                        undefined ? (
                        <h1
                          className="main-heading mb-3"
                          style={{ color: PRIMARY_YELLOW }}
                        >
                          {content.projects.split("\n")[2 + index * 3]}
                        </h1>
                      ) : (
                        <h1
                          className="main-heading mb-3"
                          style={{ color: PRIMARY_YELLOW }}
                        >
                          {
                            content.projects_portuguese.split("\n")[
                              2 + index * 3
                            ]
                          }
                        </h1>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            ) : pathname === "/ad-hoc" ? (
              <>
                <div className="content">
                  <div className="pb-4">
                    <Nav>
                      <NavItem>
                        <p
                          onClick={() => filterProject("")}
                          onMouseDown={() => setActiveFilterA(0)}
                          className={
                            activeFilterP === 0
                              ? "hoverEffect pl-0 pr-3 nav-links text-decoration-none active-link"
                              : "hoverEffect pl-0 pr-3 nav-links text-decoration-none"
                          }
                        >
                          {language === "en" ? "All" : "Todos"}
                        </p>
                      </NavItem>
                      {Object.keys(adhocAreas).map((area, index) => {
                        return (
                          <NavItem key={index}>
                            <p
                              onClick={() =>
                                filterProject(adhocAreas[area].toLowerCase())
                              }
                              onMouseDown={() => setActiveFilterA(index + 1)}
                              className={
                                activeFilterA === index + 1
                                  ? "hoverEffect pl-0 pr-3 nav-links text-decoration-none active-link"
                                  : "hoverEffect pl-0 pr-3 nav-links text-decoration-none"
                              }
                            >
                              {adhocAreas[area]}
                            </p>
                          </NavItem>
                        );
                      })}
                    </Nav>
                  </div>

                  {content.adhoc.split("\n").map((element, index) => {
                    return (
                      <Fragment key={index}>
                        {language === "en" &&
                        content.projects.split("\n")[0 + index * 2] !==
                          undefined ? (
                          <h1 className="main-heading pr-sm-4">
                            {content.adhoc.split("\n")[0 + index * 2]}
                          </h1>
                        ) : (
                          <h1 className="main-heading pr-sm-4">
                            {
                              content.adhoc_portuguese.split("\n")[
                                0 + index * 2
                              ]
                            }
                          </h1>
                        )}

                        {language === "en" &&
                        content.projects.split("\n")[1 + index * 2] !==
                          undefined ? (
                          <h1
                            style={{ color: PRIMARY_YELLOW }}
                            className="main-heading mb-3"
                          >
                            {content.adhoc.split("\n")[1 + index * 2]}
                          </h1>
                        ) : (
                          <h1
                            style={{ color: PRIMARY_YELLOW }}
                            className="main-heading mb-3"
                          >
                            {
                              content.adhoc_portuguese.split("\n")[
                                1 + index * 2
                              ]
                            }
                          </h1>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </>
            ) : null}
          </Col>
        </Row>
      ) : null}

      <div className="footer">
        <Row className="mb-1">
          <Col xs={12} sm={11}>
            <p
              className={
                pathname === "/contact" || pathname === "/studio"
                  ? "text-white"
                  : null
              }
            >
              &#169;{" "}
              {language === "en" ? Content["footer"].en : Content["footer"].pt}
              <span>
                <strong>designe-se@dersepa.com</strong>
              </span>
            </p>
          </Col>
          <Col className="px-0" xs={12} sm={1}>
            <p
              onClick={() => changeLanguage("en")}
              className={
                pathname === "/contact" || pathname === "/studio"
                  ? "hoverEffect text-white float-right"
                  : "hoverEffect float-right"
              }
            >
              <strong>en</strong>
            </p>
            <p
              onClick={() => changeLanguage("pt")}
              className={
                pathname === "/contact" || pathname === "/studio"
                  ? "hoverEffect text-white float-right mr-3"
                  : "hoverEffect float-right mr-3"
              }
            >
              <strong>pt</strong>
            </p>
          </Col>
        </Row>
      </div>
      <style jsx>
        {`
          .leftBox {
            background-color: ${BG_COLOR};
            width: 50%;
            height: 100%;
            position: fixed;
            top: 0;
            z-index: 300;
            padding: 0 30px;
            font-family: futura-pt;
            font-display: swap;
          }

          .hoverEffect {
            cursor: pointer;
          }

          .nav-links :hover {
            color: #9f9d8c !important;
          }

          .nav-links {
            font-weight: bold;
          }

          .active-link {
            color: #ffc600 !important;
          }

          .mycard {
            border-radius: 0 !important;
            border-bottom-width: 1px !important;
            border-right-width: 0 !important;
            border-left-width: 0 !important;
            border-top-width: 0 !important;
          }

          .mycard :hover {
            cursor: pointer;
            /* box-shadow: 3px 3px 3px #aaaaaa; */
          }

          .footer {
            position: fixed;
            width: 45%;
            z-index: 500;
            bottom: 0;
            font-size: 14px;
          }

          @media only screen and (max-width: 1000px) {
            .leftBox {
              width: 100%;
              height: auto !important;
              position: relative;
              z-index: 300;
              padding: 0 20px;
            }
            .main-heading {
              font-size: 30px;
              line-height: 1.1;
            }
            .content {
              margin-top: 50px;
              margin-bottom: 40px;
            }
            .leftRow {
              margin-top: 15%;
              padding-bottom: 5%;
            }
            .main-heading-margin {
              margin-bottom: 5rem;
            }
            .footer {
              display: none;
            }
            .footerMbl {
              display: inline-block !important;
              width: 100%;
              font-size: 12px;
            }
            .Itemlist {
              padding: 10px 20px 0 20px;
            }
            .img3 {
              height: auto;
            }
          }

          @media only screen and (min-width: 1000px) {
            .Itemlist {
              margin-left: 50%;
              padding: 20px 25px;
            }
            .leftRow {
              height: "90%";
            }
            .card4 {
              height: 265px !important;
              width: 95% !important;
              position: absolute !important;
              top: 0 !important;
            }
            .card7 {
              width: 98%;
              position: absolute;
              top: -35;
            }
            .main-heading {
              font-size: 40px;
              font-weight: 600;
              line-height: 1.1;
            }
            .img3 {
              height: 200px;
            }
            .toggleBtn {
              display: inline;
            }
            /* .footerMbl {
            display: inline-block;
          } */
          }
          @media only screen and (min-width: 1600px) {
            .main-heading {
              font-size: 60px;
              font-weight: 600;
              line-height: 1.1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default leftBox;
