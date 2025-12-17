const mongoose=require("mongoose");
const delivereditemsSchema=new mongoose.Schema({
    
    username:{
        type:String
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    },
    productname:{
        type:String
    },
    productprice:{
        type:String
    },
    quantity:{
        type:String
    },
    Total_Amount:{
        type:String
    }
})
module.exports=mongoose.model("delivereditemdetail", delivereditemsSchema);