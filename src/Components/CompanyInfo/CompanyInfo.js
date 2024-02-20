import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagramSquare, FaPhoneAlt, FaRegClock} from 'react-icons/fa';
import './companyInfo.css';
import '../../media.css';
import Login from '../LoginPage/Login'
import Logo from '../Logo/Logo';

function CompanyInfo({track}) {
  return (
    <div className="container company-info">
      <ul className="company-info_list">
        <li>
           <Logo/>
        </li>
        <li className="company-info_schedule">
          <FaRegClock className="icon schedule_icon"/>
          <ul>
            <li>Opening hours</li>
            <li>8:00AM - 6:00PM</li>
          </ul>
        </li>
        <li className="company-info_schedule">
          <FaPhoneAlt className="icon schedule_icon"/>
          <ul>
            <li>Contact Us</li>
            <li>(312) 261-3333</li>
          </ul>
        </li>
        <li className="company-info_sn">
          <ul className="company-info_schedule">
          <li className="icons fb"><a href="https://www.facebook.com/NationalLouis?fref=ts" target="_blank"><FaFacebookF className="icon sn"/></a></li>
          <li className="icons tw"><a href="https://twitter.com/i/flow/login?redirect_after_login=%2FNationalLouisU" target="_blank"><FaTwitter className="icon sn"/></a></li>
          <li className="icons insta"><a href="https://www.instagram.com/nationallouisu/" target="_blank"><FaInstagramSquare className="icon sn"/></a></li>
          </ul>
        </li>
        <li>
          <Login path={track}/>
        </li>
      </ul>
    </div>
  )
}

export default CompanyInfo;