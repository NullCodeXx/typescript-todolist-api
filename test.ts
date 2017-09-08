//Test unitaire.

import {user} from './user;';
import {userList} from './userList;';

let list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
if(list.user.length  != 2) {
    console.log("");
    process.exit(1);
}
list.del("toto");
console.log(list);
let u = list.auth("titi", "titi");
