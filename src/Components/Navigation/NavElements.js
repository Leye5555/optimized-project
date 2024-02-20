import React, {useState, useEffect} from 'react'
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom'
import "./Navigation.css";

function NavElements() {
  const capabilitiesCategory = [{id: "design", name: "Design"}, {id: "production", name: "Production"}, {id: "certification", name: "Certification"}];
  const [flavorCategories, setFlavorCategories] = useState();
   const getFlavorCategories = () => {
     fetch(`https://hot-handsomely-honey.glitch.me/categories`)
        .then((response) => response.json())
        .then(data => setFlavorCategories(data));
   };
   
   useEffect(() => {
     getFlavorCategories();
   }, []);

  const capabilities = {
    name: "Capabilities",
    link: "/capabilities/",
    categories: capabilitiesCategory
  };

  const flavors = {
    name: "Flavors",
    link: "/flavors/",
    categories: flavorCategories
  };

  return (
   <nav>
      <ul className="navigation">
        <li>
            <Dropdown items = {capabilities}/>
        </li>
        <li>
            <Dropdown items = {flavors}/>
        </li>
        <li>
            <Link to="/about-us" className="link">About Us</Link>
        </li>
        <li>
            <Link to="/contact-us" className="link">Contact Us</Link>
        </li>
      </ul>
 </nav>
  )
}

export default NavElements;