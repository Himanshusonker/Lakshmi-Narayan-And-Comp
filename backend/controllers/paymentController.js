const Razorpay = require("razorpay");
const crypto= require("crypto");
const deliverdetailModel=require("../models/deliveraddressModel");
const delivereditemModel=require("../models/delivereditemsModel");


const OrderPayment=async(req, res)=>{
    try {
        const { productitems, amount }=req.body;
        const mypayment=await deliverdetailModel.find({
            productitems:productitems,
            amount:amount,
            // dop: new Date()
        })
        // console.log(productitems);
        // console.log(dop);

        const instance= new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET
        });

        const options= {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        }

        instance.orders.create(options, (error, order)=>{
            
            if(error)
            {
                console.log(error);
                return res.status(500).json({message:"Something Went wWrong!"});
            }
            else
            {
                res.status(200).json({data:order});
            }
        })
        // console.log("hiii")

    } catch (error) {
        console.log(error);
        res.status(501).json({message:"Internal Server Error"});
    }
}

const PaymentVerify=async(req, res)=>{
    try {
        const { razorpay_orderID, razorpay_paymentID, razorpay_signature }=req.body;
        const sign= razorpay_orderID + "|" + razorpay_paymentID;

        const resultSign = crypto.createHmac("sha256",process.env.KEY_SECRET).update(sign.toString()).digest("hex");

        if(razorpay_signature == resultSign)
        {
            return res.status(201).json({message:"Payment Verified Successfully"});
        }
        
        // console.log("hiii");
    } catch (error) {
        console.log(error);
        res.status(502).json({message:"Internal Server Error"});
    }
}

const DeliveredDataDisplay=async(req, res)=>{
    
    try {
            const delivereddata=await deliverdetailModel.find()
            res.status(202).json({message:delivereddata});
    } catch (error) {
            console.log(error);
            res.status(503).json({message:"Invalid Credential"});
    }    
    // console.log("hiii");
}

// const DeliveredOrders=async(req, res)=>{
//     try {
//         const deliveredorders=await deliverdetailModel.find()
//         res.status(203).json({message:deliveredorders});        
//     } catch (error) {
//         console.log(error);
//         res.status(504).json({message:"Invalid Credential"});
//     }
//     // console.log("hiiii");
// }

module.exports={
        OrderPayment,
        PaymentVerify,
        DeliveredDataDisplay,
        // DeliveredOrders
}
