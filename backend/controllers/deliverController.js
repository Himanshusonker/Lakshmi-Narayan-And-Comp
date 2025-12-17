
const deliverModel=require("../models/deliveraddressModel");

const DeliveryDataSave=async(req, res)=>{
    try {
            const { pname, mobile, altmobile, pincode, state, city, address, addressarea, nearby }=req.body;
            const deliverdata= new deliverModel(req.body);
            deliverdata.save().then((data)=>{
                res.status(201).json({msg:"Deliver Data Save Successfully"});
            })
    } catch (error) {
            
    }

    // console.log("hii");
}


const DeliveryDataDisplay=async(req, res)=>{
    try {
            const deliverdatadisplay=await deliverModel.find();
                res.status(202).json({address:deliverdatadisplay});
            // console.log(deliverdatadisplay)
    } catch (error) {
        console.log(error)
        res.status(401).json("Invalid Credential");
    }
    // console.log("hiii"); 
}

module.exports={
        DeliveryDataSave,
        DeliveryDataDisplay
}