const express = require("express")
const app = express();
const db = require("./db/index");
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const User = require("./db/models/users");
const { faL } = require("@fortawesome/free-solid-svg-icons");



const PORT = 3001
const GOOGLE_CLIENT_ID = "1046159893016-v2jmmka2jor86bhdip9e6cfvpqhoge8r.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

//MIDDLEWARES
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

//Body Parser and PASSPORT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(sessions({secret: "TMDB"}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy({
    usernameField: "email",
    passwordField: "password",

},
(email, password, done)=> {
    User.findOne({ where:{ email}})
        .then(user => {
            if(!user){ //email not found
                return done(null, false)
                
            }
            user.hash(password, user.salt)
                .then(hash => {
                     if(hash !== user.password){
                        return done(null, false) //wrong password
                     }
                     return done(null, user); // success 
                })
        })
        .catch(done);
}));    

//intente loguear con google pero no pude
/* passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/login/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(err, profile);
   
  }
)); */


passport.serializeUser((user, done)=> {
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findByPk(id).then(user => {
        done(null,user)
    })
    .catch(done);
})



app.use("/api", router);

//ERROR
app.use("/api",(req,res)=>{
    res.sendStatus(404)
});


db.sync({force:false}).then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Escuchando en el puerto ${PORT}`)
    });
    
})

