import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  // setting focus.
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(" https://auth.enterprise.wikimedia.com/v1/login", {
        username: user,
        password: pwd,
      })
      .then((reponse) => {
        console.log(reponse.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.reponse);
      });
    setUser("");
    setPwd("");
    setSuccess(true);
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
            <input
              type="text"
              placeholder="Please insert username"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <input
              type="password"
              placeholder="Please insert password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
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
