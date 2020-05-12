const {
    UserModel
} = require('./user.model');

// const mongoose = require('mongoose');

module.exports.create = async ({
    id,
    name,
    email,
    password
}) => {
    const user = await UserModel.create({
        id,
        name,
        email,
        password
    });
    return {
        user
    };
};

module.exports.getAllUsers = async () => {
    const users = await UserModel.find({});
    return users;
};

module.exports.getUserById = async (id) => {
    const user = await UserModel.find({ id });
    return user;
};

module.exports.getUserByEmail = async (email) => {
    const user = await UserModel.find({ email });
    return user;
};