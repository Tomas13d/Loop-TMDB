const sequelize = require("sequelize");
const db = new sequelize("TMDB", "postgres","AxdkK937", {
    host:"localhost",
    dialect: "postgres",
    logging: false,
    
})

module.exports = db;