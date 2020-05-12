const users = require('./user.service');
const bcrypt = require('bcrypt');

module.exports.create = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.create({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
};

module.exports.getAllUsers = async (req, res) => {
    const response = await users.getAllUsers();
    res.send(response);
};

module.exports.getUserById = async (id) => {
    const response = await users.getUserById(id);
    return response[0];
};

module.exports.getUserByEmail = async (email) => {
    const response = await users.getUserByEmail(email);
    return response[0];
};