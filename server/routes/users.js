const url = require('url');

// Data served using the API
const users = [
    { username: 'john', first_name: 'John', last_name: 'wheeler' },
    { username: 'harry', first_name: 'harry', last_name: 'potter' },
    { username: 'hitler', first_name: 'hitler', last_name: 'adams' },
]

const usersRoutes = (req, res) => {

    const { query, pathname } = url.parse(req.url, true);
    
    switch (pathname) {
        case '/user':
            
            const usernameToSearch = query.username;
            const userData = users.find((userData) => userData.username === usernameToSearch)

            res.setHeader('Content-Type', 'application/json');

            if (userData) {
                res.writeHead(200);
            } else {
                res.writeHead(204);
            }

            res.end(JSON.stringify(userData));
            break;

        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
}

module.exports = usersRoutes;