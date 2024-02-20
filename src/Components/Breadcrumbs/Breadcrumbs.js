import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css';

function Breadcrumbs() {
   const location = useLocation();
   let currentLink = '';

   const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, arr) => {
      currentLink += `/${crumb}`;
      return (<div className="crumb" key={index++}>
         <Link to={currentLink} className={ index === arr.length - 1 ? "disabled" : ""}>{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</Link>
      </div>)
   })
   
  return (
    <div className="breadcrumbs container">
      <Link to="/" className="breadcrumbs_home">Home</Link>
      {crumbs}
    </div>
  )
}

export default Breadcrumbs;