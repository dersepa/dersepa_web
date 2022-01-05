import React, { useState, useEffect } from "react";
import "./Project_Detail.module.css";
import { Row, Col, Button } from "reactstrap";
import { useRouter } from "next/router";
import { BASE_URL, PRIMARY_YELLOW } from "../_utils";

import Vito from "../../assets/Project/project cover image.png";
import Back_Btn from "../../assets/back-btn.svg";
import Back_Btn_Click from "../../assets/back-btn-click.svg";
import Optica from "../../assets/Project/page_vito_05@2x.png";

export default function ProjectImages(props) {
  const [click, setClick] = useState(false);
  const [imagesHeight, setHeight] = useState(0);
  const [language, setLanguage] = useState("");

  console.log("next project ===>", props.nextProject);
  const router = useRouter();

  const nextProjectClicked = (id, title) => {
    if (id) {
      router.push(`/${props.type}/${title.split(" ").join("-")}_${id}`);
      // localStorage.setItem("projectId", id);
    }
    setTimeout(() => window.scroll(0, 0), 1000);
  };

  useEffect(() => {
    setLanguage(props.language);
  }, [props.language]);

  return (
    <div className="Itemlist animate__animated animate__fadeIn">
      {props.project.length !== 0 ? (
        <Row style={{ margin: 0 }}>
          <img
            height="auto"
            width="auto"
            alt="back button"
            onClick={() => router.push("/projects")}
            onMouseDown={() => setClick(true)}
            onMouseUp={() => setClick(false)}
            src={click ? Back_Btn_Click : Back_Btn}
            style={{ zIndex: 500 }}
            className="position-fixed mt-4 pt-3 ml-3 hoverEffect"
            width={18}
          />
          {props.project.content_images.map((contentImage, i) => {
            // console.log("printing", contentImage.url);
            return (
              <Col key={i} xs={12} style={{ padding: 0 }}>
                <img
                  alt={language === "pt" ? props.project.title_portuguese : props.project.title}
                  style={{ width: "100%" }}
                  src={BASE_URL + contentImage.url}
                />
              </Col>
            );
          })}
          {props.nextProject ? (
            <Col
              style={{ cursor: "pointer" }}
              onClick={() =>
                nextProjectClicked(
                  props.nextProject.id,
                  props.nextProject.title
                )
              }
            >
              <hr></hr>
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
              <div
                style={{ width: "100%", height: "200px", overflow: "hidden" }}
              >
                <img
                  height="auto"
                  width="auto"
                  Width="auto"
                  Height="auto"
                  alt=""
                  src={BASE_URL + props.nextProject.cover_image.url}
                  style={{ width: "100%" }}
                />
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      ) : (
        ""
      )}
    </div>
  );
}
