import mongoose from "mongoose";

const bajajSchema = mongoose.Schema({
    model:{
        type:Date,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timeStamps:true})

export const Bajaj = mongoose.model("bajaj",bajajSchema);