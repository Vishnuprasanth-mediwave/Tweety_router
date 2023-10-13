import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <div>
        <h1>Tweety</h1>
      </div>
      <div className="link">
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
        <button className="addform-btn">
          <Link to="/Form">Add Form</Link>
        </button>
      </div>
    </div>
  );
}

export default Nav;
