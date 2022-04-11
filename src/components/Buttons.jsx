import { useContext } from "react";
import { UserContext } from "..";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Buttons = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    axios.post("/api/logout").then((res) => setUser({}));
    navigate("/upcomingMovies");
  };

  return user.id ? (
    <div className="dropdown astCOlor">
      <i class="fa-solid fa-user-astronaut fa-lg"></i>
      <div>
        <h6 className="text-white userS">{user.userName}</h6>
      </div>
      <div className="dropdown-content">
        <a href="/favorites">Favorites</a>
        <a href="/upcomingMovies" onClick={handleLogout}>
          LogOut
        </a>
      </div>
    </div>
  ) : (
    <>
      <Link to={"user/login"}>
        <button className="btn botonColorNav">Login</button>
      </Link>

      <Link to={"user/register"}>
        <button className="btn botonColorNav">Register</button>
      </Link>
    </>
  );
};

export default Buttons;
