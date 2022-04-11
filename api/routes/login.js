const express = require("express");
const passport = require("passport");
const router = express.Router();

//passport authentication
router.post("/", passport.authenticate("local") , (req,res)=>{
    res.send(req.user);
})

/// google authenticate ?? 
/* router.get('/google/callback',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
),(req,res) => {
    console.log(req.user)
    res.send(req.user)
}
    
); */

//persistencia
router.get("/me",(req,res)=> {
    if(!req.user){
        res.sendStatus(401)
    }
    res.send(req.user)
})

module.exports = router;