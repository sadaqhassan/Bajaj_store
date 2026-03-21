import express from 'express'
import { configApp } from './utils/Config.js';
import connectionDb from './utils/conn.js';
import { userRoute } from './Routes/user.route.js';
const app = express();

configApp(app)

app.use("/api/user",userRoute);

connectionDb()
