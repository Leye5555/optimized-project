import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./logo.css";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" width={100} height={100} />
      </Link>
    </div>
  );
}

export default Logo;
