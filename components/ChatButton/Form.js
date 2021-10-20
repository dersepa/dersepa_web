import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { TextField } from "@material-ui/core";
import { PRIMARY_YELLOW } from "../_utils";
import TICK_IMG from "../../assets/confirmation.svg";
import { makeStyles } from "@material-ui/core/styles";
import Content from "../content.json";
import axios from "axios";
import { BASE_URL, SENDMAIL_API } from "../_utils";
import { Spinner } from "reactstrap";
import { red } from "@material-ui/core/colors";

import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   color: "red",
  //   borderRadius: 3,
  //   borderBottomColor: "#746666",
  // },
}));

const Form = (props) => {

  const [formValues, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();

  const [submit, setSubmit] = useState(false);
  const handleChnage = (e) => {
    if (e.target.name === "name") {
      setErrors({ ...errors, name: false });
    } else if (e.target.name === "email") {


      setErrors({ ...errors, email: false });
    } else {
      setErrors({ ...errors, message: false });
    }
    setValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerify = () => {};

  useEffect(() => {
    if (props.language !== "") {
      setLanguage(props.language);
    }
  }, [props.language]);

  useEffect(() => {
    localStorage.getItem("language")
      ? setLanguage(localStorage.getItem("language"))
      : setLanguage("en");
  }, []);

  const validateForm = () => {
    // console.log(formValues);
    let errors = {
      name: false,
      email: false,
      message: false,
    };
    if (formValues.name === "") {
      errors.name = true;
    } else {
      errors.name = false;
    }
    if (formValues.email === "") {
      errors.email = true;
    } else {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(formValues.email).toLowerCase())) {
        errors.email = false;
      } else {
        errors.email = true;
      }
    }
    if (formValues.message === "") {
      errors.message = true;
    } else {
      errors.message = false;
    }
    setErrors(errors);
    if (
      errors.name === false &&
      errors.email === false &&
      errors.message === false
    ) {
      return true;
    } else {
      return false;
    }
  };
  const submitForm = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        await axios.post(BASE_URL + "/contacts", formValues);
        setSubmit(true);
        setLoading(false);
        await axios.post(SENDMAIL_API, formValues);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
  };
  const classes = useStyles();
  return (
    <div className="animate__animated animate__fadeIn">
      {submit ? (
        <div className="text-center">
          <img
            height="auto"
            width="auto"
            src={TICK_IMG}
            alt="Success icon"
            width={140}
            height={140}
            className="mb-3"
          />
          <h5>Thank you!</h5>
          <p>We’ll get in touch soon!</p>
        </div>
      ) : (
        <div style={styles.color}>
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "30%" }}>
              <Spinner
                style={{ width: "6rem", height: "6rem" }}
                color="warning"
              />
            </div>
          ) : (
            <form>
              <TextField
                // className={classes.root}
                type="text"
                variant="standard"
                size="small"
                autoComplete="none"
                name="name"
                error={errors.name}
                margin="dense"
                defaultValue={formValues.name}
                fullWidth
                onChange={(e) => handleChnage(e)}
                label={
                  language === "en"
                    ? Content["form"].en[0]
                    : Content["form"].pt[0]
                }
              />
              <TextField
                // className={classes.root}
                type="text"
                variant="standard"
                size="small"
                autoComplete="none"
                error={errors.email}
                name="email"
                defaultValue={formValues.email}
                margin="dense"
                fullWidth
                onChange={(e) => handleChnage(e)}
                label={
                  language === "en"
                    ? Content["form"].en[1]
                    : Content["form"].pt[1]
                }
              />
              <TextField
                // className={classes.root}
                type="text"
                variant="standard"
                size="small"
                autoComplete="none"
                error={errors.message}
                defaultValue={formValues.message}
                name="message"
                margin="dense"
                fullWidth
                onChange={(e) => handleChnage(e)}
                label={
                  language === "en"
                    ? Content["form"].en[2]
                    : Content["form"].pt[2]
                }
                multiline
              />
              <p style={styles.para}>
                {language === "en"
                  ? Content["form"].en[3]
                  : Content["form"].pt[3]}
              </p>
              <Button
                style={styles.btnSubmit}
                onClick={() => {
                  submitForm();
                  props.onSumbitClick;
                }}
                color="link"
              >
                <strong>
                  {language === "en"
                    ? Content["form"].en[4]
                    : Content["form"].pt[4]}
                </strong>
              </Button>

              <input
                type="text"
                autoComplete="on"
                value=""
                style={{
                  display: "none",
                }}
                readOnly={true}
              />
            </form>
          )}
        </div>
      )}
      <GoogleReCaptcha onVerify={handleVerify} />
    </div>
  );
};
const styles = {
  btnSubmit: {
    textDecoration: "underline",
    color: PRIMARY_YELLOW,
    float: "right",
  },
  para: {
    fontSize: 12,
  },
  color: {
    color: "#746666",
  },
};

export default Form;
