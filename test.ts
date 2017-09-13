

//Test unitaire.
import {User} from './user';
import {UserList} from './userList';

let list = new UserList();
list.add(new User("Prénom1", "mdp1"));
list.add(new User("Prénom2", "mdp2"));
if(list.user.length  != 2) {
    console.error("Error, liste du tableau d'utilisateur : " + list.user.length);
    process.exit(1);
}

//Function delete.
list.del("Prénom2");
console.log(list);
if(list.user.length != 1) {
    console.error("Error, liste du tableau d'utilisateur : " + list.user.length);
    process.exit(1);
}

//function Authentification.
let us = list.auth("Prénom1", "mdp1");
if (us.name != "Prénom1" || us.getpassword() != "mdp1") {
    console.error("expect user titi got ", us);
    process.exit(1);
}