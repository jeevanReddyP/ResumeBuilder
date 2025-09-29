const express=require("express")
const resumeController=require("../controllers/resumeController")
const resumeRouter=express.Router

resumeRouter.post("/",resumeController.createResume)
resume

module.export=resumeRouter