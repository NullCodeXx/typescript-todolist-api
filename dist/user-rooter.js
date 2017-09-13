"use strict";
//Crée un serveur web avec plein de root(chemin).
Object.defineProperty(exports, "__esModule", { value: true });
// Import et utilise express
var express = require("express");
var bodyParser = require("body-parser");
var userList_1 = require("./userList");
var user_1 = require("./user");
exports.router = new express.Router();
var list = new userList_1.UserList();
//Utilise BodyParser.
exports.router.user('/', bodyParser.json());
//Ne jamais crée application, crée juste des chemin.
//On crée 3 chemin || Le server attend une requête post.
//Quand on reçois une requete Post, on crée un utilisateur.
exports.router.post("/add", function (req, res) {
    var name = req.body.name;
    var pass = req.body.password;
    if (!name || !pass) {
        res.status(400);
        res.send('missing parameter');
        return;
    }
    var u = new user_1.User(name, pass);
    list.add(u);
    res.send(u);
});
//Quand on reçois une requete get, on authentifie un utilisateur.
exports.router.get("/auth", function (req, res) {
});
exports.router.delete("/del", function (req, res) {
});
//# sourceMappingURL=user-rooter.js.map