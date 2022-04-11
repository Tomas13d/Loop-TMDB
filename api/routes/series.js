const express = require("express")
const router = express.Router();
const {api_key} = require("../utils/access")
const axios = require("axios")

//series del momento
router.get("/",(req,res, next)=>{
    axios
    .get(`https://api.themoviedb.org/3/tv/on_the_air?${api_key}&language=en-US&page=1`)
        .then(res => res.data)
        .then(series => res.send(series))
        .catch(next);
})

module.exports = router;