import React, { useEffect, useRef, useState } from "react";

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
    // userRef.current.focus();
  }, []);

  // Empty out errors messages, if the user changes the user, pwd.
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.prevent.default();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {sucess ? (
        <section>
          <h1> Your logged in!</h1>
          <br />
          <p>
            <a href="#"> Go to Home!</a>
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

            <label htmlFor="password">Password:</label>
            <input
              type="password"
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
              <a href="#">Click here !</a>
            </span>
          </p>
        </section>
      )}{" "}
    </>
  );
};

export default Login;
