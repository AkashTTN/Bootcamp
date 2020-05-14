const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleUserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
);

const GoogleUserModel = mongoose.model('googleUser', googleUserSchema);

module.exports = {
    GoogleUserModel
};