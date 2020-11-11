import React from "react";
import "./styles.css";

function Navbar() {
  return (
    <nav className="nav">
      <button className="btnNav" href="#">
        Apply for programme
      </button>
      <button className="btnNav" href="#">
        {" "}
        Find your Match
      </button>
      <button className="btnNav" href="#">
        Chat
      </button>
    </nav>
  );
}

export default Navbar;
