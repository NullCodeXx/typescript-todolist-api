"use strict";
//Crée un serveur web avce plein de root(chemin).
Object.defineProperty(exports, "__esModule", { value: true });
// Import et utilise express
var express = require("express");
var list_1 = require("./user/list");
exports.router = new express.Router();
var list = new list_1.userList();
//Utilise BodyParser.
user.Router.user('/', bodyParser.json());
//Ne jamais crée application, crée juste des chemin.
//On crée 3 chemin || Le server attend une requête post.
//Quand on reçois une requete POst, on crée un utilisateur.
exports.router.post("/add", function (req, res) {
    req.body.
    ;
});
//Quand on reçois une requete get, on authentifi un utilisateur.
exports.router.get("/auth", function (req, res) {
});
exports.router.delete("/del", function (req, res) {
});
//# sourceMappingURL=user-rooter.js.map