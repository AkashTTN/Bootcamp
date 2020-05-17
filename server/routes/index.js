const { getUsers, deleteUser, addUser } = require('../model/db');

module.exports = app => {

    app.delete('/user', (req, res) => {
        res.status(200).send({message: 'Username required.'});
    })

    app.get('/users', (req, res) => {
        res.send(getUsers());
    })

    app.delete('/user/:username', (req, res) => {

        if (!req.params) {
            res.status(200).end({ message: 'Please specify a username.' })
        }
        
        const username = req.params.username;
        const status = deleteUser(username)

        if (status !== -1) {
            res.status(200).send({
                action: 'USER DELETED',
                userData: { username }
            })
        }

        res.status(204).end();
    })

    app.post('/user', (req, res, next) => {
        // Middlerware to add a property to request body
        let newBodyData = { ...req.body };
        newBodyData['created_on'] = new Date();
        req.body = newBodyData;
        next()

    }, (req, res) => {
        addUser(req.body);
        res.status(200).send({
            action: 'USER ADDED',
            userData: req.body
        })
    })
}