const S = require("sequelize")
const db = require("../index");

const bcrypt = require("bcrypt");


class User extends S.Model {
    hash(password, salt){
        return  bcrypt.hash(password , salt)
    }
}

User.init({
    userName:{
        type: S.STRING,
        allowNull: false
    },
    email: {
        type: S.STRING,
        validate: {
            isEmail: true
        },
        allowNull: false
    },
    favMoviesId: {
        type: S.ARRAY(S.INTEGER),
        defaultValue: []
    },
    password: {
        type: S.STRING,
        allowNull: false
    },
    salt: {
        type: S.STRING
    }
},{
    sequelize: db,
    modelName: "User"
})


//encryting password
User.beforeCreate((user) => {
    return bcrypt.genSalt(16)
    .then(salt => {
        user.salt = salt
        return user.hash(user.password, salt)
    })
    .then(hash => {
        user.password = hash;
    })
})

module.exports = User;