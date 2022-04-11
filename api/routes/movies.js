const express = require("express")
const router = express.Router();
const {api_key} = require("../utils/access")
const axios = require("axios")

//peliculas en estreno
router.get("/upcoming",(req,res,next)=>{
    axios
    .get(`https://api.themoviedb.org/3/movie/upcoming?${api_key}&language=en-US&page=1`)
        .then(res => res.data)
        .then(mostPopular => res.send(mostPopular))
        .catch(next);
})

//peliculas por genero ID (mas info en el archivo utils de  la caperta SRC )
router.get("/geners/:id",(req,res,next)=> {
    axios
        .get(`https://api.themoviedb.org/3/discover/movie?${api_key}&with_genres=${req.params.id}`)
        .then(res => res.data)
        .then(generMovies => {
            res.send(generMovies)
        })
        .catch(next);
})

//peliculas populares del momento
router.get("/popular",(req,res,next)=>{
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?${api_key}&sort_by=popularity.desc`)
        .then(res => res.data)
        .then(mostPopular => res.send(mostPopular))
        .catch(next);
})


// una unica pelicula por su ID
router.get("/single/:movieId",(req,res,next)=>{
    axios
    .get(`https://api.themoviedb.org/3/movie/${req.params.movieId}?${api_key}`)
    .then(res => res.data)
    .then(favMovie => res.send(favMovie))
    .catch(next);

})



module.exports = router;