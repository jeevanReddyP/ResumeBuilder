const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const express=require("express")

exports.RegisterUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!email||!name||!password){
            return res.status(400).json({Msg:"Please Add All The Details"})
        }
       
    } catch (error) {
        
    }
}