const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const ConnectDB = require("./config/db")
const { route } = require("./routes/userRoute")
dotenv.config()
const app=express()
const PORT=process.env.PORT||5000
ConnectDB()
app.use(cors())
app.use(express.json())
app.use("/resume",route)
app.get("/",(req,res)=>{
    res.send("App Started")
})
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})