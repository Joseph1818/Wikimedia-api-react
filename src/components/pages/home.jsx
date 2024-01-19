import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./home.css";

function Home() {
  let wikimediaProjectUrl =
    "https://api.enterprise.wikimedia.com/v2/projects?name=Wikipedia";
  let accessToken = localStorage.getItem("access");

  useEffect(() => {
    axios
      .get(wikimediaProjectUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <section className="section1">
      <h1> Home</h1>
      <br />
      <h3> Your are logged in!</h3>
      <br />
      <p>
        <a href="/"> Go to Home!</a>
      </p>
    </section>
  );
}

export default Home;
