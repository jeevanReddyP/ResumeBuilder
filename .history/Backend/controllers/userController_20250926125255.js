const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const express=require("express")

exports.RegisterUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!email||!name||!password){
            return res.status(400).json({Msg:"Please Add All The Details"})
        }
       const salt=bcrypt.genSalt(10)
       const hashedpassword=bcrypt.hash(password,salt)
       const user=new User({
        name,
        email,
        password:hashedpassword
       })
       user.save
       res.status(200).json({Msg:"User Registerd Successfully"})
    } catch (error) {
        res.status(500).json({error:error.messa})
    }
}