import { Router } from "express";
import { getProfileApi, googleOauth, loginApi, logout, registerApi } from "../Controllers/user.controller.js";
import { isAuthM } from "../MiddleWares/isAuth.js";

const user = Router()

user.post("/register",registerApi)
user.post("/login",loginApi);
user.get("/user-data",isAuthM,getProfileApi);
user.get("/logout",logout);
user.post("/google",googleOauth);

export const userRoute = user;