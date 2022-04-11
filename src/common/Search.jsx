import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "..";
import useInput from "../hooks/useInput";

const Search = () => {
  const {setSearched} = useContext(UserContext)
  const navbarSearch = useInput();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const searchFromUser = navbarSearch.value;
    //example: Jack Reacher -> jack+reacher
    const searchFormatted = searchFromUser.replace(/\s+/g, "+").toLowerCase();
    axios
      .get(`/api/search/${searchFormatted}`)
      .then((res) => res.data)
      .then((search) => {
        setSearched(search.results)
        navigate("/search")
      })
      .catch(err => console.log(err))

  };
  return (
    <div className="container-2 space">
      <img
        width={"30"}
        className="icon"
        src="https://cdn-icons-png.flaticon.com/512/872/872355.png"
        alt="icon"
      />
      <form onSubmit={handleSubmit}>

        <input
          {...navbarSearch}
          type="search"
          id="search"
          placeholder="Search..."
        />
        
      </form>
    </div>
  );
};

export default Search;