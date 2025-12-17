const router= require("express").Router();
const userPaymentController=require("../controllers/paymentController");

router.post("/orders", userPaymentController.OrderPayment);

router.post("/verify", userPaymentController.PaymentVerify);

router.get("/delivereddatadisplay", userPaymentController.DeliveredDataDisplay);

// router.get("/deliveredorders", userPaymentController.DeliveredOrders);

module.exports=router;