const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
const PORT=process.env.PORT||500
app.use(express.json())