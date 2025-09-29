const express=require("express")
const resumeController=require("../controllers/resumeController")
const resumeRouter=express.Router

resumeRouter.post("/",resumeController.createResume)
resumeRouter.get("/:id",resumeController.getResumeById)
resumeRouter.get("/",resumeController.getUserResume)
resumeRouter.put("/:id",resumeController.updateResume)
resumeRouter.put("/")

module.export=resumeRouter