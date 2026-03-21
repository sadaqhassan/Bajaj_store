import { Router } from "express";
import { loginApi, registerApi } from "../Controllers/user.controller.js";

const user = Router()

user.post("/register",registerApi)
user.post("/login",loginApi);

export const userRoute = user;