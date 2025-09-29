const mongoose=require("mongoose")
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")
const ResumeSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
     type:String,
     required:true
    },
    thumbnailLink:{
        type:String,
    },
    template:{
        type:String,
        flattenColorPalette
    }
})