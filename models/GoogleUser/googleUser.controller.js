const googleUsers = require('./googleUser.service');

module.exports.create = async ({ name, id }) => {
    const response = await googleUsers.create({ id, name }).catch(err => console.log)
    return response;
};

module.exports.getAllUsers = async (req, res) => {
    const response = await googleUsers.getAllUsers();
    res.send(response);
};

module.exports.getUserById = async (id) => {
    const response = await googleUsers.getUserById(id);
    return response;
};