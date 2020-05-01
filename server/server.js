const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const rootRouter = require('./router');
const aboutRouter = require('./router/about');

const PORT = 4000;
const app = express();

app.use(cors({ "origin": "http://localhost:3000", "credentials": true }));
app.use(cookieParser())

app.use('/session', session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5000 * 60 }
}), (req, res, next) => { res.send('Session Created') })

app.use((req, res, next) => {
    if (req.cookies['connect.sid']) {
        console.log('Cookie', req.cookies['connect.sid'])
        next()
    } else {
        return res.send('Unauthorized Request.');
    }
})

// Middleware to parse request body
app.use('/users', express.json())

// Middleware to add a field in the request body conditionally
app.use('/users', (req, res, next) => {
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