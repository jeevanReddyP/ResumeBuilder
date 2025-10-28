const multer=require("multer")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
 filename:(req,file,cd)=>{
    cb(null,`${Date.now()}-${file.originalname}`)
 },
})

const fileFilter=(req,file,cb)=>{
    const allowedTypes=["image/jpeg","image/png","image/"]
}