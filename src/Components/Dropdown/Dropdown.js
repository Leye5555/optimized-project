import React, {useState} from 'react'
import DropdownContent from '../Dropdown/DropdownContent';
import { Link} from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa';

function Dropdown({items}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={items.link} className="link dropdown-btn">{items.name}<FaAngleDown  className="dropdown-arrow"/></Link>
          {isDropdownVisible && <DropdownContent items = {items} onMouseLeave={() => {setDropdownVisible(false)}} />}
    </div>
  )
}

export default Dropdown;