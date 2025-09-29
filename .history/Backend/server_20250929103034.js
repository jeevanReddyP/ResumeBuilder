const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const ConnectDB = require("./config/db")
const router = require("./routes/userRoute")
const path=require("path")
const fileURLToPath=require("url")
const resumeRouter = require("./routes/resumeRoutes")

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
         res.set("Access")
    }
}))
app.get("/",(req,res)=>{
    res.send("App Started")
})
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})