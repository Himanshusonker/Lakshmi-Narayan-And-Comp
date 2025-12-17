
const express=require("express");
const router=express.Router();
const userdeliverController=require("../controllers/deliverController");

router.post("/deliverydatasave", userdeliverController.DeliveryDataSave);

router.get("/deliverydatadisplay", userdeliverController.DeliveryDataDisplay);

module.exports=router;