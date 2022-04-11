const express = require("express")
const router = express.Router();
const User = require("../db/models/users");

//crea nuevo usuario y chequea que no exista un mail existente
router.post("/",(req,res,next)=>{
    
      User.findOne({where:{email: req.body.email}})
      .then(resp => {
          resp ? (res.sendStatus(422)) : (
            User.create(req.body)
            .then((user)=> res.sendStatus(201))
            .catch(next)
          )
     
      })
})

module.exports = router;