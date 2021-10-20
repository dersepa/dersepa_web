import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card, CardBody, Alert } from "reactstrap";
import { Spinner } from "reactstrap";
import { BASE_URL } from "../_utils";

import { useRouter } from "next/router";
import { removeDiacritics, removeSpecialCharacter } from "../_utils.js";
import cookieCutter from "cookie-cutter";

const Itemlist = (props) => {
  const router = useRouter();

  const [currentItemCount, setCurrentItemCount] = useState(9);
  const [itemCount, setItemCount] = useState([0]);
  const [language, setLanguage] = useState("");
  const [state, setState] = useState({
    loadmore: false,
    visible: false,
    noProjectsFound: false,
  });
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(true);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const itemClicked = (id, title) => {
    // console.log("title ==>>", title);
    // console.log(
    //   "remove diacritics ==>>",
    //   removeDiacritics(title).split(" ").join("-")
    // );
    // console.log(
    //   "remove special characters ==>>",
    //   removeSpecialCharacter(title)
    // );
    // let idUrl = removeDiacritics(
    //   `${removeSpecialCharacter(title).split(" ").join("-")}_${id}`
    // );

    let idUrl = `${removeDiacritics(title).split(" ").join("-")}_${id}`;

    router.push(`/projects/${idUrl}`);
    // localStorage.setItem("projectId", id);
    // cookieCutter.set("projectId", id);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  useEffect(() => {
    setLanguage(props.language);
  }, [props.language]);

  useEffect(() => {
    if (flag) {
      setFlag(false);
    } else {
      let f = [];
      if (props.filter === "todos") {
        setFilteredProjects(projects);
      } else {
        f = projects.filter((i) =>
          i.areas.toLowerCase().includes(props.filter)
        );
        setFilteredProjects(f);
        if (f.length === 0) {
          setState({ ...state, noProjectsFound: true });
        } else {
          setState({ ...state, noProjectsFound: false });
        }
      }
    }
  }, [props.filter]);

  const setAreas = (data) => {
    let areas = {};
    localStorage.removeItem("projectAreas");
    data.forEach((e) => {
      let a = e.areas.split(", ");
      a.forEach((e) => {
        areas[e] = e;
      });
    });
    localStorage.setItem("projectAreas", JSON.stringify(areas));
  };

  const getAllProjects = async () => {
    try {
      const res = await fetch(BASE_URL + "/projects ", {
        method: "GET",
      });
      const responseData = await res.json();
      // console.log(responseData);
      setLoading(false);
      if (responseData.length === 0) {
        setState({
          ...state,
          noProjectsFound: true,
          visible: false,
        });
      } else {
        setState({
          ...state,
          visible: false,
        });
        setAreas(responseData);
        setProjects(responseData);
        setFilteredProjects(responseData);
      }
    } catch (e) {
      setState({
        ...state,
        visible: true,
      });
      setLoading(false);
      // console.log(e);
    }
  };

  const styles = {
    responsiveImg: {
      maxWidth: "100%",
      height: "auto",
    },
    myCard: {
      borderRadius: 0,
      borderBottomWidth: 1,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      cursor: "pointer",
      overflow: "hidden",
    },
  };
  return (
    <React.Fragment>
      <div className="Itemlist animate__animated animate__fadeIn">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "38%",
            }}
          >
            <Spinner
              style={{ width: "8rem", height: "8rem" }}
              color="warning"
            />
          </div>
        ) : loading === false && filteredProjects.length > 0 ? (
          <>
            {itemCount.map((n, i) => {
              return (
                <React.Fragment key={i}>
                  <Row>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 6, order: 1 }}
                      sm={{ size: 3, order: 1 }}
                    >
                      {filteredProjects[0 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[0 + n].id,
                              filteredProjects[0 + n].title
                            )
                          }
                          className=""
                          style={{
                            ...styles.myCard,
                          }}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 160,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[0 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>
                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[0 + n].title_portuguese
                                : filteredProjects[0 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[0 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 12, order: 3 }}
                      sm={{ size: 6, order: 2 }}
                    >
                      {filteredProjects[1 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[1 + n].id,
                              filteredProjects[1 + n].title
                            )
                          }
                          style={styles.myCard}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 220,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[1 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>

                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[1 + n].title_portuguese
                                : filteredProjects[1 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[1 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 6, order: 2 }}
                      sm={{ size: 3, order: 3 }}
                    >
                      {filteredProjects[2 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[2 + n].id,
                              filteredProjects[2 + n].title
                            )
                          }
                          style={styles.myCard}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 200,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[2 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>

                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[2 + n].title_portuguese
                                : filteredProjects[2 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[2 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 6, order: 1 }}
                      sm={{ size: 3, order: 1 }}
                    >
                      {filteredProjects[3 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[3 + n].id,
                              filteredProjects[3 + n].title
                            )
                          }
                          className="cardMargin"
                          style={{ ...styles.myCard }}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 220,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[3 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>

                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[3 + n].title_portuguese
                                : filteredProjects[3 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[3 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 6, order: 2 }}
                      sm={{ size: 3, order: 2 }}
                    >
                      {filteredProjects[4 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[4 + n].id,
                              filteredProjects[4 + n].title
                            )
                          }
                          style={styles.myCard}
                          className="mt-sm-4"
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 180,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[4 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>

                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[4 + n].title_portuguese
                                : filteredProjects[4 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[4 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 12, order: 3 }}
                      sm={{ size: 6, order: 3 }}
                    >
                      {filteredProjects[5 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[5 + n].id,
                              filteredProjects[5 + n].title
                            )
                          }
                          // style={{ height: 300 }}
                          className=" mt-4"
                          style={styles.myCard}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 220,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[5 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>
                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[5 + n].title_portuguese
                                : filteredProjects[5 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[5 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 12, order: 3 }}
                      sm={{ size: 6, order: 1 }}
                    >
                      {filteredProjects[6 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[6 + n].id,
                              filteredProjects[6 + n].title
                            )
                          }
                          className="cardMargin"
                          style={{ ...styles.myCard }}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 220,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[6 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>

                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[6 + n].title_portuguese
                                : filteredProjects[6 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[6 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 6, order: 1 }}
                      sm={{ size: 3, order: 2 }}
                    >
                      {filteredProjects[7 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[7 + n].id,
                              filteredProjects[7 + n].title
                            )
                          }
                          style={styles.myCard}
                          className=" mt-4"
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 230,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[7 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>

                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[7 + n].title_portuguese
                                : filteredProjects[7 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[7 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                    <Col
                      className="px-1 mb-2"
                      xs={{ size: 6, order: 2 }}
                      sm={{ size: 3, order: 3 }}
                    >
                      {filteredProjects[8 + n] ? (
                        <Card
                          onClick={() =>
                            itemClicked(
                              filteredProjects[8 + n].id,
                              filteredProjects[8 + n].title
                            )
                          }
                          className="mb-4 mt-4"
                          style={styles.myCard}
                        >
                          <div
                            className="card-image grow"
                            style={{
                              height: 230,
                              backgroundImage: `url(
                                ${
                                  BASE_URL +
                                  filteredProjects[8 + n].cover_image.formats
                                    .large.url
                                }
                              )`,
                            }}
                          ></div>
                          <CardBody className="px-1 py-2 my-1">
                            <h6 className="mb-0">
                              {language === "pt"
                                ? filteredProjects[8 + n].title_portuguese
                                : filteredProjects[8 + n].title}
                            </h6>
                            <p className="mb-0">
                              {filteredProjects[8 + n].areas}
                            </p>
                          </CardBody>
                        </Card>
                      ) : null}
                    </Col>
                  </Row>
                </React.Fragment>
              );
            })}

            {filteredProjects.length > currentItemCount ? (
              <Row>
                <Col className="text-center" xs={12}>
                  <Button
                    onClick={() => {
                      setCurrentItemCount(currentItemCount + 9);
                      setItemCount((oldArray) => [
                        ...oldArray,
                        currentItemCount,
                      ]);
                      // console.log("item Count", itemCount);
                      setState({ ...state, loadmore: !state.loadmore });
                    }}
                    className="loadmore-btn my-3"
                    color="link"
                  >
                    <strong>
                      {/* {state.loadmore ? "Show Less" : "Load More"} */}
                      Load More
                    </strong>
                  </Button>
                </Col>
              </Row>
            ) : null}
            <Row>
              <Col className="footerMbl d-none text-center py-1" xs={12}>
                <p>
                  &#169; Dersepa.com, all rights reserved!
                  designe-se@dersepa.com
                </p>
              </Col>
            </Row>
          </>
        ) : null}
        <Alert
          color="warning"
          isOpen={state.noProjectsFound}
          toggle={() => {
            setState({ ...state, noProjectsFound: false });
            setFilteredProjects(projects);
          }}
        >
          No Projects Found
        </Alert>
        <Alert
          color="danger"
          isOpen={state.visible}
          toggle={() => setState({ ...state, visible: false })}
        >
          Fail to fetch data !
        </Alert>
      </div>
      <style jsx>
        {`
          .leftBox {
            background-color: #ffc600;
            width: 50%;
            height: 100%;
            position: fixed;
            top: 0;
            z-index: 300;
            padding: 0 20px;
            font-family: futura-pt;
          }

          .hoverEffect {
            cursor: pointer !important;
          }

          .mycard {
            border-radius: 0 !important;
            border-bottom-width: 1px !important;
            border-right-width: 0 !important;
            border-left-width: 0 !important;
            border-top-width: 0 !important;
          }

          .loadmore-btn {
            color: #ffc600 !important;
            text-decoration: underline !important;
          }

          .footer {
            position: fixed;
            width: 45%;
            z-index: 500;
            bottom: 0;
            font-size: 12px;
          }

          .leftRow {
            margin-top: 35%;
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
              font-size: 20px;
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
          }

          @media only screen and (min-width: 1000px) {
            .Itemlist {
              margin-left: 50%;
              padding: 20px 25px;
            }
            .main-heading {
              font-size: 36px;
            }
            .toggleBtn {
              display: inline;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Itemlist;
