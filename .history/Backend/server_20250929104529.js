import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import router from "./routes/userRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import resumeRouter from "./routes/resumeRoutes.js";

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
dotenv.config()
const app=express()
const PORT=process.env.PORT||5000
ConnectDB()
app.use(cors())
app.use(express.json())
app.use("/api/auth",router)
app.use("/api/resume",resumeRouter)
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{
    setHeaders:(res,path)=>{
         res.set("Access-Control-Allow-Origin","http://localhost:5173/")
    }
}))
app.get("/",(req,res)=>{
    res.send("App Started")
})
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})