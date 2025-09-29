const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const ConnectDB = require("./config/db")
const router = require("./routes/userRoute")
const path=require("path")
dotenv.config()
const app=express()
const PORT=process.env.PORT||5000
ConnectDB()
app.use(cors())
app.use(express.json())
app.use("/resume",router)
app.get("/",(req,res)=>{
    res.send("App Started")
})
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})