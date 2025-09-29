const User=require("../models/userModel")
const jwt=require("jsonwebtoken")

exports.protect=async (req,res,next)=>{
try {
    let token=req.headers.authorization;
    if(token&&token.starts)
} catch (error) {
    
}
}