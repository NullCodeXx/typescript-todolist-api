"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tab User + method add, delete, authentification.
var UserList = /** @class */ (function () {
    function UserList() {
        this.user = [];
    }
    //On ajoute un utilisateur.
    UserList.prototype.add = function (userName) {
        this.user.push(userName);
    };
    //On cherche(boucle,condition si = et supprime si ok ou null)
    UserList.prototype.del = function (userName) {
        for (var i = 0; i < this.user.length; i++) {
            if (this.user[i].name === userName) {
                this.user.slice(i, 1);
            }
        }
    };
    //Boucle des argums de id et du pwd 
    UserList.prototype.auth = function (id, password) {
        for (var u = 0; u < this.user.length; u++) {
            if (id[u] === id && password[u] === password) {
                return u;
            }
        }
        //Sinon retourne moi null.
        return null;
    };
    return UserList;
}());
exports.UserList = UserList;
//# sourceMappingURL=userList.js.map