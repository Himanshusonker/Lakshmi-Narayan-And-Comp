
const mongoose=require("mongoose");
const deliverSchema=new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    altmobile:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    addressarea:{
        type:String,
        required:true
    },
    nearby:{
        type:String,
        required:true
    },
    // totalproductprice:{
    //     type:Number,
    //     required:true
    // },
    // productitems:{
    //     type:String,
    //     required:true
    // },
    // dop:{
    //     type:Date,
    //     required:true
    // }
})
module.exports=mongoose.model("userdetail", deliverSchema);