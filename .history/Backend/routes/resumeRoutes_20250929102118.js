const express=require("express")
const resumeController=require("../controllers/resumeController")
const resumeRouter=express.Router

resumeRouter.post("/",resumeController.createResume)
resumeRouter.get("/",resumeController.getResumeById)
re

module.export=resumeRouter