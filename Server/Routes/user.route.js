import { Router } from "express";
import { getProfileApi, googleOauth, loginApi, logout, registerApi, updatePofileApi, uploadImageApi } from "../Controllers/user.controller.js";
import { isAuthM } from "../MiddleWares/isAuth.js";

const user = Router()

user.post("/register",registerApi)
user.post("/login",loginApi);
user.get("/user-data",isAuthM,getProfileApi);
user.get("/logout",logout);
user.post("/google",googleOauth);
user.post("/upload-image",isAuthM,uploadImageApi);
user.put("/update-profile",isAuthM,updatePofileApi);

export const userRoute = user;