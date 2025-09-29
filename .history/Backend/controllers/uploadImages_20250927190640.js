const fs =require("fs")
const path=require("path")
const Resume=require("../models/resumeModel")
const upload=require("../middleware/uploadMiddelware")

exports.uploadResumeImages=async (req,res)=>{
     try {
        upload.fields({name:"thumbnail"},{name:"profileImage"})
     (req,res,async(err)=>{
        if(err){
            return res.status(400).json({Msg:"File upload failed",error:err.message})
        }
        const resumeId=req.params.id;
        const resume=await Resume.findOne({_id:resumeId,userId:req.user._id})
     })
     } catch (error) {
        
     }
}