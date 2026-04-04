import cookieParser from "cookie-parser"
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

export const configApp = (app)=>{
    dotenv.config()
    app.use(cookieParser());
    const PORT = process.env.PORT
    app.listen(PORT,()=>console.log("server is running on http://localhost:"+PORT))
    app.use(express.json());
    app.use(cors({
        origin:"https://bajajstore.vercel.app",
        credentials:true
    }))
}  
