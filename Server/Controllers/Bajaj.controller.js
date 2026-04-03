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


//delete
export const deleteList = async (req,res) => {
    const id = req.userId
    const listId = req.params.id

    try {
        const ListId = await Bajaj.findById(listId)
        if(ListId.assignedTo.toString() !== id){
            return res.status(403).json({
                success: false,
                message: "You are not allowed to delete this"
            });
        }

        await Bajaj.findOneAndDelete(ListId);

        return res.status(200).json({
            success: true,
            message: "Listing deleted successfully"
        });


    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    
    }
}


//list all bajajs

export const listAll = async (req,res) => {

    const {userId} = req;

    if(!userId) return res.status(404).json({success:false});
    
    try {
        const lists = await Bajaj.find();
        return res.status(200).json({success:true,data:lists});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}