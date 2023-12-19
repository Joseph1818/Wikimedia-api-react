import { useState, useEffect } from "react";

function users() {
  const [users, setUsers] = useState();

  return (
    <article>
      <h2> Users Lists</h2>

      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}> {user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
}

export default users;
