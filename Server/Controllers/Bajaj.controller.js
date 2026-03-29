export const bajajPostApi = async (req,res) => {
    const id = req.userId;

    try {
        
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}