

const mongoose=require("mongoose");
const userProductSchema=new mongoose.Schema({

    pname:{
        type:String,
        required:true
    },
    pbrand:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})
module.exports=mongoose.model("product", userProductSchema);