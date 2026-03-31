import { Bajaj } from "../Model/bajaj.model.js";

export const bajajPostApi = async (req,res) => {
    const id = req.userId;

    try {
        const listing = await Bajaj.create({
            ...req.body,
            assignedTo:id
        });
        if(!listing) return res.status(400).json({success:false,message:"error happen"})
        
        return res.status(200).json({success:true,message:"list published"})
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}


export const myListing = async (req,res) => {
    
    const id = req.userId

    try {
        const userListing = await Bajaj.find({assignedTo:id});
        
        return res.status(200).json({success:true,data:userListing});

    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    
    }
}