import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Link from "next/link";
import DSP_logo from "../../assets/DSP_logo.svg";
import DSP_logo_hover from "../../assets/DSP_logo-hover.svg";
import DSP_logo_click from "../../assets/DSP_logo-click.svg";

import Close_Icon from "../../assets/delete-icon.svg";
import Close_Icon_Click from "../../assets/delete-icon-click.svg";
import Close_Icon_Hover from "../../assets/delete-icon-hover.svg";

import Menu_Icon from "../../assets/menu-icon.svg";
import Menu_Icon_Click from "../../assets/menu-icon-click.svg";
import Menu_Icon_Hover from "../../assets/menu-icon-hover.svg";

import { useRouter } from "next/router";

const MyNavbar = (props) => {
  const router = useRouter();
  const { pathname } = router;
  const [drawer, toggleDrawer] = useState(false);

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const [hoverClose, setHoverClose] = useState(false);
  const [clickClose, setClickClose] = useState(false);

  const [hoverMenu, setHoverMenu] = useState(false);
  const [clickMenu, setClickMenu] = useState(false);

  const changeLanguage = (e) => {
    props.setLanguage(e);
    localStorage.setItem("language", e);
  };

  const styles = {
    sideDrawer: {
      position: "fixed",
      width: "60%",
      zIndex: 900,
      backgroundColor: "white",
      color: "black",
      top: 0,
      right: 0,
      bottom: 0,
      textAlign: "right",
      paddingRight: 20,
    },
    content: {
      fontSize: "1.1em",
      fontWeight: "bold",
      marginTop: "2.5rem",
    },
    bottom: {
      display: "flex",
      position: "absolute",
      bottom: 10,
      right: 20,
      fontSize: "20px",
    },
    navlinkLight: {
      cursor: "pointer",
      color: "white",
    },
    navlinkDark: {
      cursor: "pointer",
      color: "black",
    },
    navImg: {
      cursor: "pointer",
    },
    linkMargin: {
      marginBottom: "0.4rem",
    },
    backDrop: {
      height: "100%",
      width: "100%",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 400,
      position: "fixed",
      backgroundColor: "#312F1E",
      opacity: 0.6,
    },
    fontSize: {
      fontSize: "1.875rem",
    },
  };

  return (
    <Navbar
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "1rem",
        // position: "fixed",
        // right: 15,
        // left: 25,
        // top: 0,
        // zIndex: 500,
      }}
      className="px-0"
      color="transparent"
      expand="lg"
    >
      <Link href="/">
        <img
          height="70px"
          width="auto"
          Height="70px"
          Width="auto"
          alt="Dersepa logo"
          src={
            hover === true && click === true
              ? DSP_logo_click
              : hover === true && click === false
              ? DSP_logo_hover
              : DSP_logo
          }
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseDown={() => setClick(true)}
          onMouseUp={() => setClick(false)}
          style={styles.navImg}
          width="130px"
          Width="130px"
        />
      </Link>

      <span className="d-none toggleBtn" onClick={() => toggleDrawer(true)}>
        <img
          height="55px"
          width="6px"
          Height="55px"
          Width="6px"
          alt=""
          style={{ ...styles.navImg }}
          src={
            hoverMenu === true && clickMenu === true
              ? Menu_Icon_Click
              : hoverMenu === true && clickMenu === false
              ? Menu_Icon_Hover
              : pathname === "/contact" || pathname === "/studio"
              ? Menu_Icon_Hover
              : Menu_Icon
          }
          onMouseEnter={() => setHoverMenu(true)}
          onMouseLeave={() => setHoverMenu(false)}
          onMouseDown={() => setClickMenu(true)}
          onMouseUp={() => setClickMenu(false)}
          width="6px"
          alt=""
        />
      </span>

      <Collapse navbar>
        <Nav className="mt-2 ml-4" navbar>
          <NavItem
            style={
              pathname === "/"
                ? styles.navlinkDark
                : pathname === "/contact" || pathname === "/studio"
                ? styles.navlinkLight
                : null
            }
          >
            <Link href="/projects">
              <p
                style={
                  pathname.includes("/projects")
                    ? {
                        ...styles.navImg,
                        ...styles.linkMargin,
                        color: "#FFC600",
                      }
                    : {
                        ...styles.navImg,
                        ...styles.linkMargin,
                      }
                }
                className="nav-link"
              >
                <strong>
                  {props.language === "en" ? "projects" : "projetos"}
                </strong>
              </p>
            </Link>
          </NavItem>
          <NavItem
            style={
              pathname === "/"
                ? styles.navlinkDark
                : pathname === "/contact" || pathname === "/studio"
                ? styles.navlinkLight
                : null
            }
          >
            <Link href="/studio">
              <p
                style={
                  pathname === "/studio"
                    ? {
                        ...styles.navImg,
                        ...styles.linkMargin,

                        color: "#FFC600",
                      }
                    : { ...styles.navImg, ...styles.linkMargin }
                }
                className="nav-link"
              >
                <strong>
                  {props.language === "en" ? "studio" : "estúdio"}
                </strong>
              </p>
            </Link>
          </NavItem>
          <NavItem
            style={
              pathname === "/"
                ? styles.navlinkDark
                : pathname === "/contact" || pathname === "/studio"
                ? styles.navlinkLight
                : null
            }
          >
            <Link href="/ad-hoc">
              <p
                style={
                  pathname === "/ad-hoc"
                    ? {
                        ...styles.navImg,
                        ...styles.linkMargin,
                        color: "#FFC600",
                      }
                    : { ...styles.navImg, ...styles.linkMargin }
                }
                className="nav-link"
              >
                <strong>{props.language === "en" ? "ad-hoc" : "ad hoc"}</strong>
              </p>
            </Link>
          </NavItem>
          <NavItem
            style={
              pathname === "/"
                ? styles.navlinkDark
                : pathname === "/contact" || pathname === "/studio"
                ? styles.navlinkLight
                : null
            }
          >
            <Link href="/contact">
              <p
                style={
                  pathname === "/contact"
                    ? {
                        ...styles.navImg,
                        ...styles.linkMargin,

                        color: "#FFC600",
                      }
                    : { ...styles.navImg, ...styles.linkMargin }
                }
                className="nav-link"
              >
                <strong>
                  {props.language === "en" ? "contact" : "contacto"}
                </strong>
              </p>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
      {drawer ? (
        <>
          <div
            onClick={() => toggleDrawer(false)}
            className="backdrop"
            style={styles.backDrop}
          ></div>
          <div
            className="nav-bar animate__animated animate__fadeInRight"
            style={styles.sideDrawer}
          >
            <span
              onClick={() => {
                toggleDrawer(false);
                setClickClose(false);
                setHoverClose(false);
              }}
            >
              <img
                height="40px"
                width="24px"
                Height="40px"
                Width="24px"
                alt=""
                style={styles.navImg}
                src={
                  hoverClose === true && clickClose === true
                    ? Close_Icon_Click
                    : hoverClose === true && clickClose === false
                    ? Close_Icon_Hover
                    : Close_Icon
                }
                onMouseEnter={() => setHoverClose(true)}
                onMouseLeave={() => setHoverClose(false)}
                onMouseDown={() => setClickClose(true)}
                onMouseUp={() => setClickClose(false)}
                className="mt-4 pt-3"
              />
            </span>
            <Nav style={styles.content} className="" navbar>
              <NavItem style={styles.navlinkDark}>
                <Link href="/projects">
                  <h2
                    style={
                      pathname === "/projects" ? { color: "#FFC600" } : null
                    }
                    className="nav-link mb-0 pb-0"
                  >
                    {props.language === "en" ? "projects" : "projetos"}
                  </h2>
                </Link>
              </NavItem>
              <NavItem style={styles.navlinkDark}>
                <Link href="/studio">
                  <h2
                    style={pathname === "/studio" ? { color: "#FFC600" } : null}
                    className="nav-link mb-0 pb-0"
                  >
                    {props.language === "en" ? "studio" : "estúdio"}
                  </h2>
                </Link>
              </NavItem>
              <NavItem style={styles.navlinkDark}>
                <Link href="/ad-hoc">
                  <h2
                    style={pathname === "/ad-hoc" ? { color: "#FFC600" } : null}
                    className="nav-link mb-0 pb-0"
                  >
                    {props.language === "en" ? "ad-hoc" : "ad hoc"}
                  </h2>
                </Link>
              </NavItem>
              <NavItem style={styles.navlinkDark}>
                <Link href="/contact">
                  <h2
                    style={
                      pathname === "/contact" ? { color: "#FFC600" } : null
                    }
                    className="nav-link mb-0 pb-0"
                  >
                    {props.language === "en" ? "contact" : "contato"}
                  </h2>
                </Link>
              </NavItem>
            </Nav>
            <div style={styles.bottom}>
              <p onClick={() => changeLanguage("pt")} className="mr-3">
                <strong>pt</strong>
              </p>
              <p onClick={() => changeLanguage("en")} className="">
                <strong>en</strong>
              </p>
            </div>
          </div>
        </>
      ) : null}
      <style jsx>{`
        @media only screen and (max-width: 991px) {
          .toggleBtn {
            display: inline-block !important;
          }
          .navimg: hover {
            color: "#9F9D8C" !important;
          }
        }

        @media only screen and (min-width: 991px) {
          .nav-bar {
            display: none !important;
          }
          .backdrop {
            display: none !important;
          }
          .navimg: hover {
            color: "#9F9D8C" !important;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default MyNavbar;
