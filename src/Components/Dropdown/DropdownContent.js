import { Link } from 'react-router-dom';
import "./dropdown.css";
import { v4 as uuidv4 } from "uuid";

function DropdownContent({items, onMouseLeave}) {
  const menuId = items.link.includes("capabilities") ? "capabilities" : "flavors";
  return (
    <div>
        <ul className="dropdown-content" id={menuId} onClick={onMouseLeave}>
        {items.categories.map((item) => {
          return (
          <li className="dropdown-item" key={uuidv4()}>
            <Link to={items.link + item.id}>{item.name}</Link>
          </li>)
        })}
        </ul>
    </div>
  )
}

export default DropdownContent;