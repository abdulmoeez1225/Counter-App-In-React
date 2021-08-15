import React, { Component } from "react";

// Stateless Functional Component

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class Navbar extends Component {
//   render() {}
// }

export default Navbar;