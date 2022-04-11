const express = require("express")
const router = express.Router();
const searchRouter = require("./search");
const registerRouter = require("./register");
const loginRouter = require("./login");
const logoutRouter = require("./logout")
const routerAddFav = require("./favorites");
const routerMovies = require("./movies")
const routerSeries = require("./series")
const routerCommunity = require("./community")



router.use("/search",searchRouter)
router.use("/register", registerRouter)
router.use("/login", loginRouter)
router.use("/logout", logoutRouter);
router.use("/favorites", routerAddFav)
router.use("/movies", routerMovies)
router.use("/series", routerSeries)
router.use("/community", routerCommunity)








module.exports= router;