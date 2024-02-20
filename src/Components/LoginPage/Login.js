import React, { useState } from 'react';
import {FaUserAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './login.css';
import '../CompanyInfo/companyInfo.css';
import '../../media.css';

function Login({path}) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  function handleClick() {
    if (isLogin) navigate('/login')
  }

  return (
    <div className = "login-wrapper" onClick={handleClick}>
      <ul className="company-info_schedule">
        <li><FaUserAlt className="icon login"/></li>
        {path.pathname === '/admin' ? <li>Logout</li> : <li>Login</li> }
      </ul>
    </div>
  )
}

export default Login;