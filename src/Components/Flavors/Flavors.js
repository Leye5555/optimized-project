import React, { useEffect, useState } from "react";
import "./Flavors.css";
import { useNavigate } from "react-router-dom";

function Flavors() {
  const [flavors, setFlavors] = useState();
  const navigate = useNavigate();

  const getFlavors = () => {
    fetch("https://hot-handsomely-honey.glitch.me/categories")
      .then((response) => response.json())
      .then((data) => setFlavors(data));
  };

  useEffect(() => {
    getFlavors();
  }, []);

  const handleKeyPress = (category) => (event) => {
    if (event.key === "Enter") {
      navigate(`/flavors/${category.id}`);
    }
  };

  return (
    <div className="container main_content flavors">
      <h2>Flavors</h2>
      <div className="flavors-container">
        {flavors?.map((category) => {
          return (
            <div
              role="button"
              tabIndex={0}
              onKeyUp={handleKeyPress(category)}
              key={category.id}
              onClick={() => {
                navigate(`/flavors/${category.id}`);
              }}
              className="flavor_cards"
            >
              <div className="flavors_image">
                <img
                  src={`${process.env.PUBLIC_URL} ${category.img}`}
                  width={100}
                  height={100}
                  alt="flavor"
                />
              </div>
              <p>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Flavors;
