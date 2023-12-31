import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  // Setting focus on user input field.
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState();
  const [code, setCode] = useState();

  const [userFocus, setUserFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [errMsg, setErrMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://auth.enterprise.wikimedia.com/v1/forgot-password", {
        username: user,
      })
      .then((reponse) => {
        console.log(reponse.data);
        navigate("/confirmationtPwd");
      })
      .catch((err) => {
        if (!err.reponse) {
          setErrMsg("Incorrect username please try again!");
        }
        errRef.current.focus();
      });
    setUser("");
  };

  return (
    <section>
      <p className={errMsg ? "errmsg" : "offScreen"} aria-live="assertive">
        {errMsg}
      </p>

      <h1>Forgot Password</h1>
      <br />
      <h5> Enter your Username </h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter username"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <button onClick={handleSubmit}>Send Email</button>
      </form>
    </section>
  );
}

export default ForgotPassword;
