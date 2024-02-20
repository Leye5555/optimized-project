import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import UserForm from '../UserForm/UserForm';
import {FaPagelines} from 'react-icons/fa';

function FlavorsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const highlightWord = searchParams.get("highlight")
  
   const [flavor, setFlavor] = useState();
   const params = useParams();
   const getFlavor = () => {
     fetch(`https://hot-handsomely-honey.glitch.me/flavors/${params.id}`)
        .then((response) => response.json())
        .then(data => setFlavor(data));
   };
   
   useEffect(() => {
     getFlavor();
   }, [params]);

  return (
    <div className="flavors-list_container main_content container">
      <div className="flavors-list_block">
        <h3>{flavor?.name}</h3>
        <div className="line-space">
          <FaPagelines className="flavors-list_icon"/>
        </div>
          <ul className="flavors-list">
            {flavor?.list?.map(item=>{
                return (
                  <li key={uuidv4()} className={highlightWord === item ? "highlight" : ""}>{item}</li>)
            })}
          </ul>
      </div>
      <UserForm/>
    </div>
  )
}

export default FlavorsList;