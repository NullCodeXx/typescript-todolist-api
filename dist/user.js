"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Export la class User.
var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
    }
    User.prototype.display = function () {
        return this.name + this.password;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map