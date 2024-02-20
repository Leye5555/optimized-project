import React, { useEffect, useRef, useState } from "react";
import "./Navigation.css";
import NavElements from "./NavElements";
import {FaSearch} from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import "../../media.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Navigation() {
  const [flavors, setFlavors] = useState();
  const [searchText, setSearchText] = useState("");
  const elementRef = useRef();
  const [isFixed, setFixed] = useState(false);
  const [isOpenNav, setOpenNav] = useState(false);
  const foundFlavors = handleSearch();
  
  function getAllFlavors(){
    fetch(`https://hot-handsomely-honey.glitch.me/flavors`)
      .then((response) => response.json())
      .then(data => setFlavors(data));
  };
  
  function handleSearch(){
    const result = [];
    if (!searchText) return;
    let str = searchText.trim();
    if (str.length === 0) return;
    str = str.toLowerCase();
    
    for (const key in flavors) {
      for (const flavor of flavors[key].list) {
          if (str.length === 1) {
            if (flavor.toLowerCase().at(0) === str) {
              result.push({"name": flavor, "categoryId": flavors[key].id,"categoryName": flavors[key].name});
            }
          } else if (flavor.toLowerCase().includes(str)) {
             result.push({"name": flavor, "categoryId": flavors[key].id,"categoryName": flavors[key].name});
          }  
      }
    }
   return result;
  }

  function handleMenu() {
    setOpenNav((prev)=> prev ? false : true);
  }

  useEffect(() => {
    getAllFlavors();
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const element = elementRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < 0) {
          setFixed(true);
        } else if (scrollTop === 0) {
          setFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={elementRef} className={`header container ${isFixed ? 'fixed' : ''}`}>
      <div className={`desktop-nav container ${isOpenNav ? 'show' : ''}`}>
          <NavElements/>
          <div className="nav_search">
             <input type="search" name="search" value={searchText} placeholder="Find your favorite flavor..." onInput={(e) => setSearchText(e.target.value)} />
             <button className="search-button">
               <FaSearch className="search_icon"/>
             </button>
             <ul className={`nav-search_menu ${foundFlavors ? 'backgroundColor' : 'display_search'}`} onClick={()=> setSearchText("")} >
              {foundFlavors?.map((flavor) => {
                return <li key={uuidv4()}><Link  className="nav-search_menu-link" to={"flavors/" + flavor.categoryId + "?highlight=" + flavor.name} >{flavor.name} - <i>{flavor.categoryName}</i></Link></li> 
              })}
            </ul> 
          </div>
      </div>
      <Breadcrumbs/>
      <FaBars className="burger_icon" onClick={handleMenu}/>
    </header>
  )
}

export default Navigation;