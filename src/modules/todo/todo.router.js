const { Router } = require("express");
const bodyValidator = require("../../middleware/request-validator.middleware");
const { createTodoDTO, editTodoDTO } = require("./todo.request");
const todoCtrl = require("./todo.controller");

todoRouter = Router();

todoRouter.post("/", bodyValidator(createTodoDTO), todoCtrl.create);
todoRouter.get("/", todoCtrl.getAll)
todoRouter.get("/new", todoCtrl.add)
todoRouter.get("/:id/edit", todoCtrl.edit);
todoRouter.put("/:id", bodyValidator(editTodoDTO), todoCtrl.update);
todoRouter.delete("/:id", todoCtrl.delete);

module.exports = todoRouter;