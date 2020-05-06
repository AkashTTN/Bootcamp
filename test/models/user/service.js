const {
    ItemModel
} = require('./model');

module.exports.create = async ({
    name,
    quantity,
    isSanitized,
    unit,
    category,
    location
}) => {
    const item = await ItemModel.create({
        name,
        quantity,
        isSanitized,
        unit,
        category,
        location
    });
    return {
        item
    };
};

module.exports.getAll = async () => {
    const items = await ItemModel.find();
    return items;

    // const stories = await StoryModel.find()
    //   .populate('author', 'first_name')
    //   .exec();
    // return stories;
};

module.exports.update = async ({ id }, dataToBeUpdated) => {
    const response = await ItemModel.update({
        _id: id
    },
        dataToBeUpdated,
        {
            multi: true
        });
    return response;
};

module.exports.delete = async ({ id }) => {
    const response = await ItemModel.deleteMany({
        _id: id
    });
    return response;
};