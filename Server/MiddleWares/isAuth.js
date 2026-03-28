import jwt from 'jsonwebtoken'

export const isAuthM = async (req,res,next) => {
    try {

        const userToken = req.cookies?.accessToken;
        
        
        if(!userToken){
            return res.status(401).json({success:false,message:"Please login first"})
        }

        const verifyToken = jwt.verify(userToken,process.env.JWT_SECRET);

        if(!verifyToken){
            return res.status(404).json({success:false,message:"you are not autherized"})
        };

        req.userId = verifyToken.id;
        next()
    } catch (error) {
        res.status(500).json({success:false,message:"server error"})
        console.log(error)
    }
}