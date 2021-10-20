import React, { useState, Fragment } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { useRouter } from "next/router";
import { PRIMARY_YELLOW } from "../_utils";
import ChatIcon from "../../assets/chat-bot-icon.svg";
import ChatIcon_hover from "../../assets/chat-bot-icon-hover.svg";
import ChatIcon_click from "../../assets/chat-bot-icon-click.svg";
import Close from "../../assets/delete-icon.svg";
import Form from "./Form";

const ChatButton = (props) => {
  const [open, setOpen] = useState(false);
  const [sumbit, setSumbit] = useState(false);

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const toggle = () => setOpen(!open);
  const router = useRouter();
  // console.log(router.pathname);

  const formSumbitClicked = () => {
    setSumbit(true);
  };

  const setSumbitFalse = () => {
    setSumbit(false);
  };

  return (
    <div>
      {open ? (
        <Card style={styles.mycard}>
          <CardBody>
            {sumbit === false ? (
              <React.Fragment>
                <h5>Hi! Ready for something new?</h5>
                <h6 className="text-secondary mb-2">
                  We’ll come back to you in less than 24 horas
                </h6>
              </React.Fragment>
            ) : (
              ""
            )}
            <Form language={props.language} onSumbitClick={formSumbitClicked} />
          </CardBody>
        </Card>
      ) : null}
      {open ? (
        <img
          height="auto"
          width="auto"
          Height="auto"
          Width="auto"
          alt=""
          onClick={() => {
            toggle();
            setSumbitFalse();
          }}
          style={styles.crossBtn}
          src={Close}
          width={60}
        />
      ) : (
        <img
          height="auto"
          width="auto"
          Height="auto"
          Width="auto"
          alt=""
          onClick={() => {
            toggle();
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseDown={() => setClick(true)}
          onMouseUp={() => setClick(false)}
          style={styles.btn}
          src={
            hover === true && click === true
              ? ChatIcon_click
              : hover === true && click === false
              ? ChatIcon_hover
              : ChatIcon
          }
          width={80}
        />
      )}
    </div>
  );
};
const styles = {
  btn: {
    position: "fixed",
    zIndex: 299,
    right: 25,
    bottom: 25,
  },
  crossBtn: {
    position: "fixed",
    zIndex: 299,
    right: 25 + 12,
    bottom: 25 + 13,
    backgroundColor: PRIMARY_YELLOW,
    borderRadius: 30,
    padding: 15,
  },
  mycard: {
    position: "fixed",
    zIndex: 400,
    right: 35,
    bottom: 115,
    width: 280,
  },
};

export default ChatButton;
