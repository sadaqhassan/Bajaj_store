import { Router } from "express";
import { bajajPostApi, myListing } from "../Controllers/Bajaj.controller.js";
import { isAuthM } from "../MiddleWares/isAuth.js";

const bajaj = Router();

bajaj.post("/create-bajaj",isAuthM,bajajPostApi);
bajaj.get("/my-list",isAuthM, myListing);

export const bajajRoute = bajaj