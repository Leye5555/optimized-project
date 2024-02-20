import React, { useEffect, useState } from "react";
import "./Flavors.css";
import { useNavigate } from "react-router-dom";

function Flavors() {
  const [flavors, setFlavors] = useState();
  const navigate = useNavigate();

  const getFlavors = () => {
    fetch('https://hot-handsomely-honey.glitch.me/categories')
      .then((response) => response.json())
      .then((data) => setFlavors(data))
  };

  useEffect(() => {
    getFlavors();
  },[]);
  
  return (
      <div className="container main_content flavors">
        <h2>Flavors</h2>
        <div className="flavors-container">
        {flavors?.map((category) => {
          return ( 
            <div key={category.id} onClick={()=>{navigate(`/flavors/${category.id}`)}} className="flavor_cards">
              <div className="flavors_image">
               <img src={`${process.env.PUBLIC_URL} ${category.img}`} alt="flavor" />
              </div>
              <p>{category.name}</p>
            </div>
          )
        })}
        </div>
      </div>
  );
}

export default Flavors;