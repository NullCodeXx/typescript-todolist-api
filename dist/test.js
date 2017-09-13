"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Test unitaire.
var user_1 = require("./user");
var userList_1 = require("./userList");
var list = new userList_1.UserList();
list.add(new user_1.User("Prénom1", "mdp1"));
list.add(new user_1.User("Prénom2", "mdp2"));
if (list.user.length != 2) {
    console.error("Error, liste du tableau d'utilisateur : " + list.user.length);
    process.exit(1);
}
//Function delete.
list.del("Prénom2");
console.log(list);
if (list.user.length != 1) {
    console.error("Error, liste du tableau d'utilisateur : " + list.user.length);
    process.exit(1);
}
//function Authentification.
var us = list.auth("Prénom1", "mdp1");
if (us.name != "Prénom1" || us.password != "mdp1") {
    console.error("expect user titi got ", us);
    process.exit(1);
}
//# sourceMappingURL=test.js.map