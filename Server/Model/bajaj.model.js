import mongoose, { Schema, SchemaTypes } from "mongoose";

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
    },
    images:{
        type:Array,
        required:true
    },
    assignedTo:{
        type:Schema.Types.ObjectId,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
    }
    
},{timeStamps:true});

export const Bajaj = mongoose.model("bajaj",bajajSchema);