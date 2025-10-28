const resume=require("../models/resumeModel")
const express=require("express")
const user=require("../models/userModel")

exports.createResume=async (req,res)=>{
    try {
        const {title}=req.body
         const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    name: '',
                    progress: '',
                },
            ],
            interests: [''],
        };
        const newResume=await resume.create({
            userId:req.user._id,
            title,
            ...defaultResumeData,
            ...req.body
        })
        res.status(201).json(newResume)
    } catch (error) {
        res.status(500).json({Msg:"Faild to create resume",error:error.meassage})
    }
}

exports.getUserResume=async(req,res)=>{
    try {
        const resumes=await resume.find({userId:req.user._id}).sort({
             updatedAt:-1
        })
        res.json(resumes)
    } catch (error) {
         res.status(500).json({Msg:"Faild to get resume",error:error.meassage})
    }
}

exports.getResumeById=async(req,res)=>{
    try {
        const resume=await resume.findOne({_id:req.paramas.id,userID:req.user._id})
        if()
    } catch (error) {
        
    }
}