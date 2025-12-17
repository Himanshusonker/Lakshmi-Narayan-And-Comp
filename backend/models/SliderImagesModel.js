const mongoose=require("mongoose");
const sliderimageSchema=new mongoose.Schema({
    sliderimage:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("sliderimage", sliderimageSchema);