import { Router } from "express";
import { getProfileApi, loginApi, logout, registerApi } from "../Controllers/user.controller.js";
import { isAuthM } from "../MiddleWares/isAuth.js";

const user = Router()

user.post("/register",registerApi)
user.post("/login",loginApi);
user.get("/user-data",isAuthM,getProfileApi);
user.get("/logout",logout);

export const userRoute = user;