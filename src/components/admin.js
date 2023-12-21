import { Link } from "react-router-dom";
import Users from "./users";

import React from "react";

function Admin() {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <Users />
      <br />
      <p> You must have been assigned an Admin Role.</p>
      <div className="flexGrow">
        <link to="/">Home</link>
      </div>
    </section>
  );
}

export default A;
