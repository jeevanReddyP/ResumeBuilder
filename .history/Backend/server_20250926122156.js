const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
const PORT=process.env
app.use(express.json())