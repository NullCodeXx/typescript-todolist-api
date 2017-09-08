"use strict";
//Test unitaire.
Object.defineProperty(exports, "__esModule", { value: true });
var list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
if (list.user.length != 2) {
    console.log("");
    process.exit(1);
}
list.del("toto");
console.log(list);
var u = list.auth("titi", "titi");
//# sourceMappingURL=test.js.map