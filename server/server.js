const express = require('express');
const cors = require('cors');

const rootRouter = require('./router');
const aboutRouter = require('./router/about');

const PORT = 4000;
const app = express();

app.use(cors());

// Middleware to parse request body
app.use(express.json())

rootRouter(app);
aboutRouter(app);

app.listen(PORT, () => {
    console.log('Server running...');
})