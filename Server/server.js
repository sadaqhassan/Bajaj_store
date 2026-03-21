import express from 'express'
import Config from './utils/Config.js';
import connectionDb from './utils/conn.js';
const app = express();

Config(app)

connectionDb()