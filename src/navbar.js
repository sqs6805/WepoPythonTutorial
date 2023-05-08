import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/input">Input</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;