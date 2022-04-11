import { Link } from "react-router-dom";
import { genersId } from "../utils/geners";
//generes id contiene las algunos nombres de generos, id y el icono que se mostrara en la sidebar
const Sidebar = () => {
  return (
    <div className="">
      <nav className="main-menu">
              {genersId.map((geners,i)=> (
                <li className="darkerli" key={i}>
                  <Link to={`/geners/${geners.id}`}>
                      <i className={`fa-1 faIcon ${geners.icon}`}></i>
                      <span className="nav-text">{geners.name}</span>
                   </Link>
                </li>
              ))}
      </nav>
    </div>
  );
};

export default Sidebar;
