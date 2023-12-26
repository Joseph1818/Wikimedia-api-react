import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function SuccessPwdChangePage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section>
      <br />
      <i class="fa-regular fa-circle-check fa-5x "></i>
      <br />
      <h1>Password Changed!</h1>
      <br />
      <h4>Your password has been changed successfully.</h4>
      <br />
      <button onClick={handleSubmit}> Back to Login </button>
    </section>
  );
}

export default SuccessPwdChangePage;
