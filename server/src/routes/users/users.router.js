/**
 * This file simply accepts all the routing traffic from the /login/ route and
 * ties it to a method from the controller which is where the db logic happens.
 */
const express = require("express");

const { httpLoginUser, httpRegisterUser } = require("./users.controller");
const usersRouter = express.Router();

// Route currently: /v1/login
usersRouter.post("/", httpLoginUser);
usersRouter.post("/register", httpRegisterUser);

module.exports = usersRouter;
