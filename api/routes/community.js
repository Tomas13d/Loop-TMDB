const express = require("express");
const router = express.Router();
const User = require("../db/models/users");

//trae todos los usuarios con el userName que es pasado por el buscador
router.get("/:userName",(req,res,next)=> {
    User.findAll({where: {
        userName: req.params.userName
    }})
    .then(user => {
        res.send(user)
    })
    .catch(next);
})


module.exports = router;