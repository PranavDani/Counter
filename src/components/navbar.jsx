import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand" style={{ marginLeft: "110px" }}>
        Navbar{" "}
        <span className="btn btn-secondary" style={{ marginLeft: "10px" }}>
          {props.totalCounter}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
