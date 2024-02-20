import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./footer.css"

function Footer() {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
      <footer className="footer_container">
        <div className="container">
         <p>Copyright © {year}. All rights reserved.</p>
         <Link to="">
            <img src={logo} alt="Logo" />
         </Link>
        </div>
      </footer>
  );
}

export default Footer;