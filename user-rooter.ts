//Crée un serveur web avce plein de root(chemin).

// Import et utilise express
import * as express from "express";
import {userList} from './user/list';
import {body}

export let router = new express.Router();
let list = new userList();
//Utilise BodyParser.
user.Router.user('/', bodyParser.json());


//Ne jamais crée application, crée juste des chemin.
//On crée 3 chemin || Le server attend une requête post.

//Quand on reçois une requete POst, on crée un utilisateur.
router.post("/add", function(req, res)  {
    req.body.
});

//Quand on reçois une requete get, on authentifi un utilisateur.
router.get("/auth", function(req, res)  {
    
});

router.delete("/del", function(req, res)  {

});