const User=require("../models/userModel")


exports.RegisterUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!email||!name||!password){
            return res.sta
        }
    } catch (error) {
        
    }
}