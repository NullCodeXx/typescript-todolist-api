"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tab User + method add, delete, authentification.
var userList = /** @class */ (function () {
    function userList() {
    }
    //On ajoute un utilisateur.
    userList.prototype.add = function (userName) {
        this.user.push(userName);
    };
    //On cherche(boucle,condition si = et supprime si ok ou null)
    userList.prototype.del = function (userName) {
        for (var i = 0; i < this.user.length; i++) {
            if (this.user[i].userName === userName) {
                this.user.slice(i, 1);
            }
        }
    };
    return userList;
}());
exports.userList = userList;
//# sourceMappingURL=userList.js.map