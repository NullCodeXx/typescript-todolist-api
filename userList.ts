import {User} from './user';

// Tab User + method add, delete, authentification.
export class UserList{
    user: User[] = [];

    //On ajoute un utilisateur.
    add(userName : User) {
        this.user.push(userName);
    }

    //On cherche(boucle,condition si = et supprime si ok ou null)
    del(userName : string) {
        for(let i = 0 ; i < this.user.length ; i++) {
            if(this.user[i].name === userName) {
                this.user.slice(i, 1);
            }
        }
    }

    //Boucle des argums de id et du pwd 
    auth(id : string, password : string) {
        for(let u = 0; u < this.user.length ; u++) {
            if(id[u] === id && password[u] === password) {
                return u;
            }
        }
        //Sinon retourne moi null.
        return null;
    }
}