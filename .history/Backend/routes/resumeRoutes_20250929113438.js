const express = require("express");
const resumeController = require("../controllers/resumeController");
const uploadImage = require("../controllers/uploadImages");
const { protect } = require("../controllers/authController");

const resumeRouter = express.Router();

// Attach protect middleware to all routes that need authentication
resumeRouter.post("/", protect, resumeController.createResume);
resumeRouter.get("/:id", protect, resumeController.getResumeById);
resumeRouter.get("/", protect, resumeController.getUserResume);
resumeRouter.put("/:id", protect, resumeController.updateResume);
resumeRouter.put("/:id/upload-images", protect, uploadImage.uploadResumeImages);
resumeRouter.delete("/:id", protect, resumeController.deleteResume);

module.exports = resumeRouter;
