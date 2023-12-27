import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  // setting focus.
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState();
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState();
  const [sucess, setSuccess] = useState();

  // setting focus on the input when the components load.
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Empty out errors messages, if the user changes the user, pwd.
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  // Checking if the password input matches our Regex Password.
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  // error message useEffect.
  useEffect(() => {
    setErrMsg("");
  }, [pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v2 = PWD_REGEX.test(pwd);
    if (!v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    axios
      .post(" https://auth.enterprise.wikimedia.com/v1/login", {
        username: user,
        password: pwd,
      })
      .then((reponse) => {
        console.log(reponse.data);
        setSuccess(true);
      })
      .catch((err) => {
        if (!err.reponse) {
          setErrMsg("Incorrect Password or username please try again");
        }
        errRef.current.focus();
      });
    setUser("");
    setPwd("");
  };

  return (
    <>
      {sucess ? (
        <section>
          <h1> Home</h1>
          <br />
          <h3> Your are logged in!</h3>
          <br />
          <p>
            <a href="/"> Go to Home!</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {" "}
            {errMsg}
          </p>

          <h1>Sign In</h1>

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
            <button> Sign In </button>
          </form>
          <p>
            Forgot password? <br />
            <span className="line">
              {/* put rooter link */}
              <a href="/forgotPwd">Click here !</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
