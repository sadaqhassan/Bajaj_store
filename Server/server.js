import express from 'express'
import { configApp } from './utils/Config.js';
import connectionDb from './utils/conn.js';
import { userRoute } from './Routes/user.route.js';
import { bajajRoute } from './Routes/bajaj.route.js';
const app = express();

configApp(app)

app.use("/api/user",userRoute);
app.use("/api/bajajs",bajajRoute);

connectionDb()
