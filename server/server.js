const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const rootRouter = require('./router');
const aboutRouter = require('./router/about');

const PORT = 4000;
const app = express();

// Setting up cors middleware
app.use(cors({ "origin": "http://localhost:3000", "credentials": true }));

// Setting cookie parser middleware
app.use(cookieParser())

// Middleware for adding sessions
app.use('/session', session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5000 * 60 }
}), (req, res, next) => { res.send('Session Created for 5 mins') })

// Check if request contains a session id to allow access to endpoints
app.use((req, res, next) => {
    if (req.cookies['connect.sid']) {
        next()
    } else {
        return res.status(401).send('Unauthorized Request.');
    }
})

// Middleware to parse request body
app.use('/user', express.json())

// Middleware to add a field in the request body conditionally
app.use('/user', (req, res, next) => {
    if (req.method === 'POST') {
        let newBodyData = { ...req.body };
        newBodyData['created_on'] = new Date();
        req.body = newBodyData;
        next()
    } else {
        next()
    }
})

rootRouter(app);
aboutRouter(app);

app.listen(PORT, () => {
    console.log('Server running...');
})