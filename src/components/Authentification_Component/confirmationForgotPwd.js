import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// setting focus on the input when the components load.

function ConfirmationForgotPwd() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState();
  const [code, setCode] = useState();

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState();

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }

    axios
      .post(
        " https://auth.enterprise.wikimedia.com/v1/forgot-password-confirm",
        {
          username: user,
          password: pwd,
          confirmation_code: code,
        }
      )
      .then((reponse) => {
        console.log(reponse.data);
        navigate("/sucessPwdChange");
      })
      .catch((err) => {
        if (!err.reponse) {
          setErrMsg("Incorrect Password or username please try again");
        }
      });
    setUser("");
    alert("your password was succsefully changed!");
  };

  return (
    <section>
      <h1> New Password </h1>
      <br />
      <h5>
        {" "}
        WE'VE JUST SENT YOU AN EMAIL WITH A CODE TO RESET YOUR PASSWORD.{" "}
      </h5>
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">
          Password:
          <span className={validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          s
        ></input>
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and special
          character.
          <span arial-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span arial-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
        </p>

        <label htmlFor="username">OTP-Code:</label>
        <input
          type="password"
          id="code"
          autoComplete="off"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          required
        />
        <button onClick={handleSubmit}> Submit </button>
      </form>
    </section>
  );
}

export default ConfirmationForgotPwd;
