import React, { useContext, useEffect } from "react";
import axios from "axios";
import Buttons from "./Buttons";
import { UserContext } from "..";
import Search from "../common/Search";
import { Link} from "react-router-dom";

const Navbar = () => {
    const {user,setUser} = useContext(UserContext);

    //persistencia 
    useEffect(()=>{
      if(user){
        axios
        .get("/api/login/me")
        .then(res =>{
          setUser(res.data)
        })
      }
  },[])


const favButton =() => {
    if(user.id) {
       return(
        <>
         <Link to={"/favorites"}>
           <img  width={"65"} src="https://cdn-icons.flaticon.com/png/512/2190/premium/2190625.png?token=exp=1647532351~hmac=197271b4f5dc419ffdc694579aad4c5d"/>
        </Link>
        
        </>
       ) 
    }
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-color">
        <Link to={"/upcomingMovies"}>
        <img src="https://see.fontimg.com/api/renderfont4/X3WjK/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTAwMCwiZnMiOjUxLCJmZ2MiOiIjNzVDQUJFIiwiYmdjIjoiIzQ2NDY0NiIsInQiOjF9/TE9PUA/uncracked-free-trial.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link to={"/popularMovies"}>
              <a className="nav-item nav-link" href="/popularMovies"><u className="textGeneralNav">Movies</u></a>
            </Link>
            <Link to={"/series"}>
              <a className="nav-item nav-link" href="/series"><u className="textGeneralNav">Series</u></a>
            </Link>
            <Link to={"/user/community"}>
              <a className="nav-item nav-link " href="/user/community"><u className="textGeneralNav">Community</u> </a>
            </Link>
            
            {favButton()}
          </div>
        </div>
        <Search/>
     <Buttons/>
      </nav>
    </>
  );
};

export default Navbar;