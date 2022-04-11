import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useMatch, useParams } from "react-router-dom";
import { UserContext } from "..";
import Grid from "./Grid";

const Content = () => {
  const { user, searched } = useContext(UserContext);
  const [popularMovies, setPopularMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [series, setSeries] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [moviesGener, setMoviesGener] = useState([]);

  //para hacer el pedido a el back /api/movies/geners/ID
  const { id } = useParams();
  const match = useMatch(`/geners/${id}`);

  useEffect(() => {
    axios
      .get("api/movies/upcoming")
      .then((res) => setUpcomingMovies(res.data.results))
      .catch((err) => console.log(err));

    axios
      .get("/api/movies/popular")
      .then((res) => setPopularMovies(res.data.results))
      .catch((err) => console.log(err));

    axios
      .get("api/series")
      .then((res) => setSeries(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  //geners solo si matchea con /geners/id
  useEffect(() => {
    axios
      .get(`/api/movies/geners/${id}`)
      .then((res) => setMoviesGener(res.data.results))
      .catch((err) => console.log(err));
  }, [match]);

  ///seting favs movies only if the user is login
  //you can't see series in favs in this proyect (to be continue... )
  useEffect(() => {
    if (user.id) {
      let favMovies = [];
      user.favMoviesId.map((id, i) => {
        axios
          .get(`api/movies/single/${id}`)
          .then((res) => favMovies.push(res.data))
          .catch((err) => console.log(err));
      });
      setFavorites(favMovies);
    }
  }, [user.favMoviesId]);

  
  return id ? (
    <div className="containerGrid">
    <Grid moviesGener={moviesGener} />
    </div>
  ) : (
    <div className="containerGrid">
    <Grid
      favorites={favorites}
      popularMovies={popularMovies}
      series={series}
      upcomingMovies={upcomingMovies}
      search={searched}
    />
     </div>
  );
};

export default Content;
