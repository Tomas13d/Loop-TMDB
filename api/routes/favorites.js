const express = require("express");
const User = require("../db/models/users");
const router = express.Router();



router.post("/add",  (req,res,next)=>{
    User.update(req.body, {
        where: { id: req.body.id}
    })
    .catch(next)

})
router.post("/remove",  (req,res,next)=>{
    User.update(req.body, {
        where: { id: req.body.id}
    })
    .catch(next)
})



module.exports = router;