const fs =require("fs")
const path=require("path")
const Resume=require("../models/resumeModel")
const upload=require("../middleware/uploadMiddelware")

exports.uploadResumeImages=async (req,res)=>{
     try {
        upload.fields({name:"thumbnail"},{name:"profileImage"})
     (req,res,asyn(err)=>{
        if(err){
            return res.status(400).json({Msg:"File upload failed"})
        }
     })
     } catch (error) {
        
     }
}