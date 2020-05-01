const express = require('express');
const cors = require('cors');

const rootRouter = require('./router');
const aboutRouter = require('./router/about');

const PORT = 4000;
const app = express();

app.use(cors());

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