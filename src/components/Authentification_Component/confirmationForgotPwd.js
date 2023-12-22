import React from "react";
import axios from "axios";
import { useState, useRef } from "react";

function ConfirmationForgotPwd() {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState();
  const [code, setCode] = useState();

  const handleSubmitConfirm = (e) => {
    e.preventDefault();
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
        alert("password successfully change!");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.reponse);
      });
    setUser("");
  };

  return (
    <section>
      <h1> New Password </h1>
      <br />
      <h5>
        {" "}
        Please enter a new password & confirmation code sent in your E-mail
        adress.{" "}
      </h5>
      <br />

      <form onSubmit={handleSubmitConfirm}>
        <input
          type="text"
          placeholder="please enter username"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <input
          type="text"
          placeholder="please enter new password"
          id="password"
          autoComplete="off"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />

        <input
          type="password"
          placeholder="please enter code"
          id="code"
          autoComplete="off"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          required
        />
      </form>
      <button href="#"> Submit </button>
    </section>
  );
}

export default ConfirmationForgotPwd;
