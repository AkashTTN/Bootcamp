if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const checkAuthenticated = require('./middlewares/CheckAuthenticated')
const loginRouter = require('./routes/login')
const registerRouter = require('./routes/register')
const logoutRouter = require('./routes/logout')
const users = require('./models/user.controller')

mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: "true",
});

mongoose.connection.on("error", err => {
    console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
});

const initializePassport = require('./passport-config')
initializePassport(passport)

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.get('/', checkAuthenticated, (req, res) => {
    // console.log('inside:', await req.user)
    res.render('index.ejs', { name: req.user.name })
})

// Setting up routes
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/logout', logoutRouter)

app.get('/users', users.getAllUsers)


app.listen(3000)