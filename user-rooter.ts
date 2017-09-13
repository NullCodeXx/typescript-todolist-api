//Crée un serveur web avec plein de root(chemin).

// Import et utilise express
import * as express from "express";
import * as bodyParser from "body-parser";
import {UserList} from './userList';
import {User} from './user';


export let router = new express.Router();
let list = new UserList();
//Utilise BodyParser.
router.user('/', bodyParser.json());


//Ne jamais crée application, crée juste des chemin.
//On crée 3 chemin || Le server attend une requête post.

//Quand on reçois une requete Post, on crée un utilisateur.
router.post("/add", function(req, res)  {
    let name = req.body.name;
    let pass = req.body.password;
    if (!name || !pass) { 
        res.status(400); 
        res.send('missing parameter');
        return;
    }
    let u = new User(name, pass);
    list.add(u);
    res.send(u);
});

//Quand on reçois une requete get, on authentifie un utilisateur.
router.get("/auth", function(req, res)  {
    
});

router.delete("/del", function(req, res)  {

});