// Register

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
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
};

export const loginApi = async(req,res)=>{
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

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET, {expiresIn:"7d"})
        const {password:pass, ...rest} = user._doc

        return res.cookie("accessToken",token,{httpOnly:true}).status(200).json({success:true,userData:rest ,message:`Welcome back `})
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}

//profileGet
export const getProfileApi = async (req,res) => {
    const {userId} = req

    if(!userId) return res.status(404).json({success:false,message:"sorry not get info"});
    try {
        const user = await theUser.findById(userId);
        if(!user){
            return res.status(404).json({success:false,message:"user not found"});
        }

        const {password:pass, ...rest} = user._doc

        return res.status(200).json({success:true,userData:rest});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}

//logout

export const logout = (req,res)=>{
    try {
        res.clearCookie("accessToken").json({success:true,message:"logedOut"})
        localStorage.removeItem("user")
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
} 


//loginOUTHGOOGLE

export const googleOauth = async (req,res) => {
    const {email,username,avatar} = req.body
    try {
        const user = await theUser.findOne({email})

        const password = "FJAOPEQCCQFQ£"

    const hash = await bcrypt.hash(password,10)

    const newUser = new theUser({
            username,
            email,
            password:hash,
            avatar
        });

    if(!user){
        await newUser.save();
    }

        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET, {expiresIn:"7d"})
        
        const {password:pass, ...rest} = user._doc

        return res.cookie("accessToken",token,{httpOnly:true}).status(200).json({success:true,userData:rest,message:`Welcome `})

        
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


export const uploadImageApi = async (req,res) => {
    const id = req.userId;
    try {
        const user = await theUser.findById(id)
        if(!user){
            return res.status(400).json({success:false,message:"please register first"})
        }

        user.avatar = req.body.imageUri

        await user.save()

        res.status(200).json({success:true ,image:user.avatar ,message:`image changed`})
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


export const updatePofileApi = async (req,res) => {
    const id = req.userId
    const { username, email } = req.body;
    if(!id) return res.status(401).json({success:false,message:"please register first"})
    try {
        const user = await theUser.findByIdAndUpdate(
            id,
            { $set: { username, email } },
            { new: true }
        );


    return res.status(200).json({success:true,userData:user,message:"updated profile"});
        
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}