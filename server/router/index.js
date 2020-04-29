const { getUsers, deleteUser, addUser } = require('../model/db');

module.exports = app => {
    app.get('/users', (req, res) => {
        res.send(getUsers());
    })

    app.delete('/users/:username', (req, res) => {
        const username = req.params.username;
        const status = deleteUser(username)
        
        if(status !== -1) {
            res.status(200).end(JSON.stringify({
                action: 'USER DELETED',
                userData: { username }
            }))
        }

        res.status(204).end();
    })

    app.post('/users', (req, res) => {
        addUser(req.body);
        res.status(200).end(JSON.stringify({
            action: 'USER ADDED',
            userData: req.body
        }))
    })
}