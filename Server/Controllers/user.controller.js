// Register

import { errorHandle } from "../MiddleWares/error.js"
import { theUser } from "../Model/user.model.js"
import bcrypt from 'bcryptjs'

export const registerApi = async(req,res,next)=>{
    const {username,email ,password} = req.body

    if(!email || !password || !username){
        return res.status(400).json({success:false,message:"fill all fields"})
    }
    try {
        const user = await theUser.findOne({email})
        if(user){
            return res.status(400).json({success:false,message:"this user is exist"})
        }

        const hash = await bcrypt.hash(password,10)

        const newUser = new theUser({
            username,
            email,
            password:hash
        });
        await newUser.save();
        
        return res.status(200).json({success:true,message:"Welcome mr "+username})
    } catch (error) {
        next(errorHandle(
            500,"server error"
        ))
    }
}

