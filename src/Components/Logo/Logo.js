import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import '../Logo/logo.css';

function Logo() {
  return (
    <div>
      <Link to=""><img src={logo} alt="Logo" className="logo"/></Link>
    </div>
  )
}

export default Logo;