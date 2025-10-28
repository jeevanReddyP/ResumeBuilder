const { protect } = require("../controllers/authController"); // add this
const e

resumeRouter.post("/", protect, resumeController.createResume);
resumeRouter.get("/:id", protect, resumeController.getResumeById);
resumeRouter.get("/", protect, resumeController.getUserResume);
resumeRouter.put("/:id", protect, resumeController.updateResume);
resumeRouter.put("/:id/upload-images", protect, uploadImage.uploadResumeImages);
resumeRouter.delete("/:id", protect, resumeController.deleteResume);
