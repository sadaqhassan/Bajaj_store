// Register

import { errorHandle } from "../MiddleWares/error.js"
import { theUser } from "../Model/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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
};

export const loginApi = async(req,res,next)=>{
    const {email ,password} = req.body

    if(!email || !password){
        return res.status(400).json({success:false,message:"fill all fields"})
    }
    try {
        const user = await theUser.findOne({email})
        if(!user){
            return res.status(400).json({success:false,message:"incorrect email or password"})
        }

        const isCompare = await bcrypt.compare(password,user.password)

        if(!isCompare){
            return res.status(400).json({success:false,message:"incorrect email or password"})
        }

        const token = jwt.sign({id:user._id},process.env.JWR_SECRET, {expiresIn:"7d"})


        return res.cookie("accessToken",token,{httpOnly:true}).status(200).json({success:true,message:"Welcome mr "+username})
    } catch (error) {
        next(errorHandle(
            500,"server error"
        ))
    }
}