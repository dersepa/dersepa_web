import React, { useState, useEffect } from "react";
import "./Adhoc_Detail.module.css";
import { BASE_URL } from "../_utils";

import { Row, Col, Button } from "reactstrap";
import { useRouter } from "next/router";
import { Spinner } from "reactstrap";

import Vito from "../../assets/Project/project cover image.png";
import Back_Btn from "../../assets/back-btn.svg";
import Back_Btn_Click from "../../assets/back-btn-click.svg";
import Optica from "../../assets/Project/page_vito_05@2x.png";

export default function ProjectImages(props) {
  const [click, setClick] = useState(false);
  const [imagesHeight, setHeight] = useState(0);

  // console.log("project ===>", props.project);
  const router = useRouter();

  const nextProjectClicked = (id, title) => {
    if (id) {
      router.push(`/${props.type}/${title.replace(" ", "-")}_${id}`);
      // localStorage.setItem("projectId", id);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="Itemlist animate__animated animate__fadeIn">
      <Row style={{ margin: 0 }}>
        <Col xs={12} style={{ padding: 0 }} className="d-none d-lg-block d-xl-block">
          <img
            height="auto"
            width="auto"
            alt=""
            onClick={() => router.push("/ad-hoc")}
            onMouseDown={() => setClick(true)}
            onMouseUp={() => setClick(false)}
            src={click ? Back_Btn_Click : Back_Btn}
            style={{ zIndex: 500 }}
            className="position-fixed mt-4 pt-3 ml-3 hoverEffect"
            width={18}
          />
          {props.project.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "38%" }}>
              <Spinner
                style={{ width: "8rem", height: "8rem" }}
                color="warning"
              />
            </div>
          ) : (
            <>
            <img
              height="auto"
              width="auto"
              alt=""
              className="bgImage"
              src={BASE_URL + props.project.cover_image.url}
            />
            {/* <img
              height="auto"
              width="auto"
              alt=""
              className="bgImageB"
              src={BASE_URL + props.project.cover_image.url}
            /> */}
            </>
          )}
        </Col>
        {/* <Col xs={12} style={{ padding: 0 }}>
          <img
          height=""
                width="" style={{ width: "100%" }} src={Optica} />
        </Col> */}
        {/* <Col  
        style={{ cursor: "pointer" }}
         onClick={() =>
              nextProjectClicked(props.nextProject.id, props.nextProject.title)
            }>
          <hr></hr>
          <p     
          >
            next project
          </p>
          <h2>{props.nextProject.title}</h2>
          <p>{props.nextProject.areas}</p>
          <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
            <img
              src={
                props.nextProject.cover_image
                  ? props.nextProject.cover_image.url
                  : Vito
              }
              style={{ width: "100%" }}
            />
          </div>
        </Col> */}
      </Row>
      <style jsx>
        {`
          @media only screen and (max-width: 1000px) {
            .bgImage {
              height: auto;
              width: 100%;
              object-fit: cover;
            }
            .bgImageB {
              width: 100%;
              height: auto;
              position: absolute;
              transform: translate(-50%, -50%);
              top: 50%;
              left: 50%;
            }
          }

          @media only screen and (min-width: 1000px) {
            .bgImage {
              height: 100vh;
              width: 100%;
              object-fit: cover;
            }
            .bgImageB {
              width: 100%;
              height: auto;
              position: absolute;
              transform: translate(-50%, -50%);
              top: 50%;
              left: 50%;
            }
          }
        `}
      </style>
    </div>
  );
}
