





const mongoose=require("mongoose");
const contactSchema= new mongoose.Schema({


    pname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("ContactUs", contactSchema);