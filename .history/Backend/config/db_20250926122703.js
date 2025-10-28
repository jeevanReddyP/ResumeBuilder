const mongoose=require("mongoose")


const ConnectDB=async ()=>{
    try {
        await mongoose.connect(p)
    } catch (error) {
        
    }
}