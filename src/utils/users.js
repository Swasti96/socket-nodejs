const users = [];

// Join User to chat
exports.userJoin = (id, username, room) => {
    const user = { id, username, room };
    users.push(user);

    return user;
}

// Get curent user
exports.getTheCurrentUser = (id) => {
    return users.find(user => user.id == id)
}

// User leaves chat
exports.userLeave = (id) => {
    const index = users.findIndex(user => user.id == id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
exports.getRoomUsers = (room) => {
    return users.filter(user => user.room == room);
}


