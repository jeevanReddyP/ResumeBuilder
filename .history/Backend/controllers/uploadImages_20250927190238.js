const fs =require("fs")
const path=require("path")
const Resume=require("../models/resumeModel")
const upload=require("../middleware/uploadMiddelware")

exports.uploadResumeImages=async (req,res)=>{
     try {
        upload.fields({name:"thumbnail"})
     } catch (error) {
        
     }
}