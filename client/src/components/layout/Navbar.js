import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title, icon }) {
  return (
    <div className="navbar bg-primary">
      <i className={icon}>{title}</i>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: " ContactStorage",
  icon: "fas fa-users fa-2x",
};

export default Navbar;
