const User=require("../models/userModel")
const jwt=require("jsonwebtoken")

exports.protect=async (req,res,next)=>{
try {
    let token=req.headers.authorization;
    if(token&&token.startsWith("Bearer")){
        token = token.split(" ")[1];
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        req.user=await User.findById
    }
} catch (error) {
    
}
}