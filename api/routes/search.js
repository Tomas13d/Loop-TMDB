const express = require("express")
const router = express.Router();
const axios = require("axios");
const {api_key} = require("../utils/access")

//busca de peliculas 
router.get("/:searchFormatted",(req,res,next)=>{
    axios
      .get(`https://api.themoviedb.org/3/search/movie?${api_key}&query=${req.params.searchFormatted}`)
      .then(res => res.data)
      .then(searched =>res.send(searched))
      .catch(next);
        
})


module.exports= router;