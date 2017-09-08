
// Tab User + method add, delete, authentification.
export class userList{
    user: Users[] = [];

    //On ajoute un utilisateur.
    add(userName : Users) {
        this.user.push(userName);
    }

    //On cherche(boucle,condition si = et supprime si ok ou null)
    del(userName : string) {
        for(let i = 0 ; i < this.user.length ; i++) {
            if(this.user[i].userName === userName) {
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