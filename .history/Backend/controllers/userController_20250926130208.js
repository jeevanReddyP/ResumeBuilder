const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const express=require("express")
const jwt=require("jsonwebtoken")


const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"7d"})
}

exports.RegisterUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body
         const userExists=await User.findOne({email})
         if(userExists){
            return res.status(400).json({Msg:"User already exists"})
         }
        if(!email||!name||!password){
            return res.status(400).json({Msg:"Please Add All The Details"})
        }
        if(password.length<6){
            res.status(400).json({Msg:"Password Must Be 6 Charecters"})
        }
       const salt=awabcrypt.genSalt(10)
       const hashedpassword=bcrypt.hash(password,salt)
       const user=new User({
        name,
        email,
        password:hashedpassword
       })
       user.save()
       res.status(200).json({Msg:"User Registerd Successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}