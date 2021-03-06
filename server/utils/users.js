// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

/* class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getUserDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

var me = new Person('Farid', 20);
var des = me.getUserDescription();
console.log(des); */

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        var user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user) => user.id !== id)
        }

        return user;
    }

    getUser(id) {
        var user = this.users.filter((user) => user.id === id)[0];

        return user;
    }

    getUserByName(name) {
        var user = this.users.filter((user) => user.name.toLowerCase() === name.toLowerCase());
        return user;
    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name)

        return namesArray;
    }
}

module.exports = {
    Users
}