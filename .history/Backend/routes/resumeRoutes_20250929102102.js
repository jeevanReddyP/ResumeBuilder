const express=require("express")
const resumeController=require("../controllers/resumeController")
const resumeRouter=express.Router

resumeRouter.post("/",resumeController.createResume)
resumeRouter.get("/",)

module.export=resumeRouter