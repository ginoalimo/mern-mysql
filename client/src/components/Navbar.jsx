import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <h1>React mysql</h1>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/new">Create task</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
