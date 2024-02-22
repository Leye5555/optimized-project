import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../CompanyInfo/companyInfo.css";
import "../../media.css";

function Login({ path }) {
  const [isLogin] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    if (isLogin) navigate("/login");
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (isLogin) navigate("/login");
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyUp={handleKeyPress}
      role="button"
      className="login-wrapper"
      onClick={handleClick}
    >
      <ul className="company-info_schedule">
        <li>
          <FaUserAlt className="icon login" />
        </li>
        {path.pathname === "/admin" ? <li>Logout</li> : <li>Login</li>}
      </ul>
    </div>
  );
}

export default Login;
