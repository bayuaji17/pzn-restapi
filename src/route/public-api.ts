import express from "express";
import { UserController } from "../controller/user-controller";
// TEST CI CD Pipeline

export const publicRouter = express.Router();
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/testcicd", UserController.register);
