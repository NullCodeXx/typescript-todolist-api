
// Tab User + method add, delete, authentification.
export class userList{
    user: Users[];

    //On ajoute un utilisateur.
    add(userName : Users) {
        this.user.push(userName);
    }

    //On cherche(boucle,condition si = et supprime si ok ou null)
    del(userName : string) {
        for(let i = 0 ; i < this.user.length ; i ++) {
            if(this.user[i].userName === userName) {
                this.user.slice(i, 1);
            }
        }
    }

}