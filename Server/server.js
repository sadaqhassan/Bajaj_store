import express from 'express'
import { configApp } from './utils/Config.js';
import connectionDb from './utils/conn.js';
const app = express();

configApp(app)

connectionDb()
