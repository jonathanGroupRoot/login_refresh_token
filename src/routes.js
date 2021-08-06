
const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController.js");

routes.post("/createUser", UserController.createUsers);
routes.post("/authenticate", UserController.authenticate);

const authMiddleware = require("./middlewares/Authenticate");
routes.get("/courses", authMiddleware, (req,res) => {
    return res.json([
        {id: 1, curso: "NodeJs"},
        {id: 2, curso: "ReactJs"},
        {id: 3, curso: "ReactNative"},
        {id: 4, curso: "Flutter"},
        {id: 5, curso: "Elixir"}
    ])
})

module.exports = routes;