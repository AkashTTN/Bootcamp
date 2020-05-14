const { GoogleUserModel } = require('./googleUser.model');

module.exports.create = async ({ name, id }) => {
    const user = await GoogleUserModel.create({
        id,
        name,
    });
    return {
        user
    };
};

module.exports.getAllUsers = async () => {
    const users = await GoogleUserModel.find({});
    return users;
};

module.exports.getUserById = async (id) => {
    const user = await GoogleUserModel.findOne({ id });
    return user;
};
