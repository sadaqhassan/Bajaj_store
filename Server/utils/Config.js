import cookieParser from "cookie-parser"
import cors from 'cors'
import dotenv from 'dotenv'

const configApp = (app)=>{
    dotenv.config()
    const PORT = process.env.PORT
    app.listen(PORT,()=>console.log("server is running on http://localhost:"+PORT))
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors())
}  

export default configApp();