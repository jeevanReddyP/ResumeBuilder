const express=require("express")
const resumeController=require("../controllers/resumeController")
const uploadImage=
const resumeRouter=express.Router

resumeRouter.post("/",resumeController.createResume)
resumeRouter.get("/:id",resumeController.getResumeById)
resumeRouter.get("/",resumeController.getUserResume)
resumeRouter.put("/:id",resumeController.updateResume)
resumeRouter.put("/:id",resumeController.)

module.export=resumeRouter