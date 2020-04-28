const http = require('http');

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/home':
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.statusCode = 200;
            res.end('Home Page Content', { 'Content-Type': 'text/plain' });            break;

        case '/about':
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.statusCode = 200;
            res.end('About Page Content', { 'Content-Type': 'text/plain' });
            break;

        case '/contact':
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.statusCode = 200;
            // res.writeHead(200, { 'Content-Type': 'text/html' })
            // res.write('<h2>Contact Page Content</h2>');
            res.end('Contact Page Content', { 'Content-Type': 'text/plain' });
            break;

        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
})

server.listen(4000, 'localhost', () => {
    console.log('Server running')
});