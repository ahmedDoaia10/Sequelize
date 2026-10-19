import { Router } from "express";
import * as us from "./user.service.js";
import { successResponse } from "../../common/utils/response.js";
export let userRouter = Router();

userRouter.post("/", async (req, res) => {
  let user  = await us.CreateUser(req.body);
  res.status(201).json({
    message: "User Created" ,
    data: user,
  });
});




userRouter.get("/", async (req, res) => {
  let users = await us.getAllUsers(req.query);
  res.status(200).json({
    message: "users fetched",
    data: users,
  });
});



userRouter.get("/byId/:id", async (req, res) => {
  let user = await us.getUserById(req.params.id);
  res.status(user ? 200 : 404).json({
    message: "user fetched",
    data: user,
  });
});




userRouter.put("/:id", async (req, res) => {
  let [user, created ] = await us.updateUser(req.params.id , req.body);
  // res.status(result ? 200 : 404).json({
  //   message: `user ${result ? "updated" : "not found"}`,
  //   data: result,
  // });

  successResponse({
    res,data:user, status : created ? 201 : 200 
  })
});






userRouter.delete("/:id", async (req, res) => {
  let result = await us.deleteUser(req.params.id);
  res.status(result ? 200 : 404).json({
    message: `user ${result ? "deleted" : "not found"}`,
    data: result,
  });
});



userRouter.delete("/hard-Delete/:id", async (req, res) => {
  let result = await us.HardDeleteUser(req.params.id);
  res.status(result ? 200 : 404).json({
    message: `user ${result ? "deleted" : "not found"}`,
    data: result,
  });
});



userRouter.patch("/:id", async (req, res) => {
  let result = await us.restoreUser(req.params.id , req.body);
  res.status(result ? 200 : 404).json({
    message: `user ${result ? "restore" : "not found"}`,
    data: result,
  });
});
