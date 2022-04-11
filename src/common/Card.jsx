import CardRange from "./CardRange";
import {useState, useContext } from "react";
import { UserContext } from "..";
import axios from "axios";

const Card = ({ data }) => {
  const {user} = useContext(UserContext);
  const [state,setState] = useState("")

  // arreglos puramente esteticos 
  const center = data.name ? "centerSerie": "center";
  

 //agrega a fav
  const addFavorites = (e) => {
    setState("enabled")
     user.favMoviesId.push(data.id)
    axios
      .post("/api/favorites/add",user)
      .catch(err => console.log(err))
      
    
  };
 //elimina de fav
  const removeFavorites = (e) => {
    setState("disabled")
    user.favMoviesId = user.favMoviesId.filter(movies=> movies !== data.id)
    axios
    .post("/api/favorites/remove",user)
    .catch(err => console.log(err))
  }

//aqui me fijo si tiene la propiedad name que es propia de las series, en este proyecto solo se pueden agregar peliculas a fav
//el boton de agregar a fav de Card solo aparece si el usuario esta logeado
//se fija ademas si la pelicula ya esta en la lista de fav y deja el boton acitivado
  const buttons = () => {
    if(!data.name){
      if(user.id){
        if((user.favMoviesId).includes(data.id)){
            return  <i className="iLike iLike_press" onClick={removeFavorites}></i>
        }
          return <i className="iLike" onClick={addFavorites}></i>
      }
    }
   
 return <></>
  }

//algunos arreglos en la data de cada pelicula para poder mostrarla mejor en el front
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  let date = "";
  let overview = `${data.overview.slice(0, 170)}...`;
  let title = data.title ? (`${data.title.slice(0, 35)}`) : (`${data.name.slice(0, 35)}`)
  if (data.release_date) date = data.release_date.slice(0, 4);


  return (
    <>
      <div className="card movie_card ">
        <img
          src={`${imgUrl}${data.poster_path}`}
          className="card-img-top image"
          alt="Movie Poster"
        ></img>
        <div class="details">
          <div class={`${center}`}>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div>
            {buttons()}
            </div>
          </div>
        </div>
        <div className="card-body">
          <span className="movie_info float-left">
            <span className="movie_info">{date}</span>
            <h5 className="card-title">
              <strong>{title}</strong>
            </h5>
          </span>
          <CardRange range={data.vote_average} />
        </div>
      </div>
    </>
  );
};

export default Card;
