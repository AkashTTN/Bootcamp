const http = require('http');
const studentsRoutes = require('./routes/students');
const usersRoutes = require('./routes/users');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url.includes('students')) {
        studentsRoutes(req, res);
    } else if (url.includes('user')) {
        usersRoutes(req, res);
    } else if (url === '/home') {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.statusCode = 200;
        res.end('Home Page Content', { 'Content-Type': 'text/plain' });
    } else if (url === '/about') {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.statusCode = 200;
        res.end('About Page Content', { 'Content-Type': 'text/plain' });
    } else if (url === 'contact') {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.statusCode = 200;
        res.end('Contact Page Content', { 'Content-Type': 'text/plain' });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Resource not found" }));
    }

})

server.listen(4000, 'localhost', () => {
    console.log('Server running')
});