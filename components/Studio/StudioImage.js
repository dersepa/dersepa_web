import React from "react";
import { Row, Col } from "reactstrap";

import Converse from "../../assets/Studio/Studio_image.png";

export default function ProjectImages() {
  return (
    <div className="Itemlist animate__animated animate__fadeIn">
      <Row style={{ margin: 0 }}>
        <Col xs={12} style={{ padding: 0 }}>
          <img alt="" src={Converse} className="bgImage" />
        </Col>
      </Row>
      <style jsx>{`
        .leftBox {
          background-color: #f8f7f7;
          width: 50%;
          height: 100%;
          position: fixed;
          top: 0;
          z-index: 300;
          padding: 0 20px;
        }

        .hoverEffect {
          cursor: pointer;
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
          margin-top: 10%;
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

          .bgImage {
            height: auto;
            object-fit: cover;
            width: 100%;
          }

          .Itemlist {
            padding: 0px;
          }
        }

        @media only screen and (min-width: 1000px) {
          .Itemlist {
            margin-left: 50%;
            padding: 0px;
          }

          .bgImage {
            height: 100vh;
            object-fit: cover;

            width: 100%;
          }

          .card4 {
            height: 265px;
            width: 95%;
            position: absolute;
            top: -30;
          }

          .card7 {
            width: 98%;
            position: absolute;
            top: -35;
          }

          .main-heading {
            font-size: 36px;
          }

          .toggleBtn {
            display: inline;
          }

          /* .footerMbl {
            display: inline-block;
          } */
        }
      `}</style>
    </div>
  );
}
