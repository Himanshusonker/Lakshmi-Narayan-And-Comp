
const contactModel=require("../models/contactModel");

const contactRecSave=async(req, res)=>{
    const myData=new contactModel(req.body)
    myData.save().then((data)=>{
        res.json({msg:"Data Save"})
    });
}
module.exports={
    contactRecSave
}