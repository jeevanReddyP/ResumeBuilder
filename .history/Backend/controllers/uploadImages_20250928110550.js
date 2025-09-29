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

        if(!resume){
            return res.status(404).json({Msg:"Resume not found or unauthorized"})
        }
        const uploadsFolder=path.join(process.cwd(),"Uploads")
        const baseUrl=`${req.protocal}://${req.get("host")}`

            const newThumbnail=req.files.thumbnail?.[0];
            const newProfileImage=req.files.profileImage?.[0]
            if(newThumbnail){
                if(resume.thumbnailLink){
                    const oldThumbnail=path.join(uploadsFolder,path.basename(resume.thumbnailLink))
                    if(fs.existsSync(oldThumbnail))
                        fs.unlinkSync(oldThumbnail)
                }
                resume.thumbnailLink=`${baseUrl}/uploa`
            }
     })
     } catch (error) {
        
     }
}