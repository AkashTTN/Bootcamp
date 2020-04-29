let users = [
    { username: '@Akash', name: 'Akash' },
    { username: '@Taman', name: 'Taman' },
    { username: '@Sanchit', name: 'Sanchit' },
];

function getUsers() {
    return JSON.stringify(users);
}

const addUser = (userData) => {
    users = users.concat([{
        username: userData.username,
        name: userData.name
    }]);
}

function deleteUser(username) {

    let usersData = [...users];

    const index = usersData.findIndex((user) => {
        return user.username === username;
    })

    if (index !== -1) {
        usersData.splice(index, 1);
        users = usersData;
    }

    return index;

}

module.exports = {
    getUsers,
    addUser,
    deleteUser,
}