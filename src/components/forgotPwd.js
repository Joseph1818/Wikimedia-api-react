import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function ForgotPassword() {
  // Setting focus on user input field.
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [errMsg, setErrMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://auth.enterprise.wikimedia.com/v1/forgot-password", {
        username: user,
      })
      .then((reponse) => {
        console.log(reponse.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.reponse);
      });
    setUser("");
    setSuccess(true);
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
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <button>Continue</button>
      </form>
    </section>
  );
}

export default ForgotPassword;
