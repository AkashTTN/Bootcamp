if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const checkAuthenticated = require('./middlewares/CheckAuthenticated')
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register')
const logoutRoutes = require('./routes/logout')
const passport = require('passport')
const users = require('./models/LocalUser/localUser.controller')
const googleUsers = require('./models/GoogleUser/googleUser.controller')

mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: "true",
});

mongoose.connection.on("error", err => {
    console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
});

// setup login strategies
const initializeLocalStrategy = require('./config/LocalStrategy/passport-config')
const initializeGoogleStrategy = require('./config/GoogleStrategy/passport-config')
initializeLocalStrategy(passport)
initializeGoogleStrategy(passport)


passport.serializeUser((user, done) => { 
    // console.log('user to serialize', user)
    if(user.user) {
        // console.log('inside')
        user = user.user._id
    }
    // console.log('id to serialize', user.id)
    done(null, user.id) 
})
passport.deserializeUser((id, done) => {
    return done(null, users.getUserById(id))
})

// setup view engine
app.set('view-engine', 'ejs')

// parsing request body
app.use(express.urlencoded({ extended: false }))

// library to show flash messages
app.use(flash())

// setup sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// initialize passport to use sessions
app.use(passport.initialize())
app.use(passport.session())

app.use(methodOverride('_method'))
app.get('/', checkAuthenticated, (req, res) => {
    // console.log('inside:', await req.user)
    res.render('index.ejs', { name: req.name })
})

// Setting up routes
app.use('/login', loginRoutes)
app.use('/register', registerRoutes)
app.use('/logout', logoutRoutes)

// for testing purposes
app.get('/users', users.getAllUsers)
app.get('/googleUsers', googleUsers.getAllUsers)


app.listen(3000)