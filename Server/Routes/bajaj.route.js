import { Router } from "express";
import { bajajPostApi, deleteList, myListing } from "../Controllers/Bajaj.controller.js";
import { isAuthM } from "../MiddleWares/isAuth.js";

const bajaj = Router();

bajaj.post("/create-bajaj",isAuthM,bajajPostApi);
bajaj.get("/my-list",isAuthM, myListing);
bajaj.delete("/my-list/delete/:id",isAuthM, deleteList);

export const bajajRoute = bajaj