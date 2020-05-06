const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        isSanitized: Boolean,
        unit: {
            type: String,
            required: true
        },
        expiryDate: Date,
        createdDate: Date,
        updatedDate: Date,
        category: String,
        location: String
    }
);

itemSchema.pre('save', function () {
    this.set({ createdDate: Date.now().toDateString(), updatedDate: Date.now().toDateString() });
});

const ItemModel = mongoose.model('Item', itemSchema);

module.exports = {
    ItemModel
};