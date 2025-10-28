const express=require("express")
const resumeController=require("../controllers/resumeController")
const uploadImage=require("../controllers/uploadImages")
const resumeRouter=express.Router

resumeRouter.post("/",resumeController.createResume)
resumeRouter.get("/:id",resumeController.getResumeById)
resumeRouter.get("/",resumeController.getUserResume)
resumeRouter.put("/:id",resumeController.updateResume)
resumeRouter.put("/:id/upload-images",uploadImage.uploadResumeImages)
resu

module.export=resumeRouter