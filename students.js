const http = require('http');
const url = require('url');

// Data served using the API
const students = [
    { first_name: 'John', last_name: 'wheeler', branch: 'CSE' },
    { first_name: 'harry', last_name: 'potter', branch: 'CSE' },
    { first_name: 'hitler', last_name: 'adams', branch: 'IT' },
]

const server = http.createServer((req, res) => {

    const { query, pathname } = url.parse(req.url, true);

    switch (pathname) {

        case '/students/all':
            const data = { ...students };

            res.writeHead(200, { 'Content-Type': 'application/json' })

            res.end(JSON.stringify(data));

            break;

        case '/students':

            const branchToSearch = query.branch;
            const studentData = students.filter((studentData) => studentData.branch === branchToSearch)

            if (studentData) {
                res.writeHead(200);
            } else {
                res.writeHead(204);
            }

            res.end(JSON.stringify(studentData));
            break;

        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Server running')
});