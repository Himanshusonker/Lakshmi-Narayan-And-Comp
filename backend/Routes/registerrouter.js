
const router=require("express").Router();
const userregisterController=require("../controllers/registerController");

router.post("/userregisterdatasave", userregisterController.UserRegisterDataSave);

router.get("/userregisterdatadisplay", userregisterController.UserRegistrationDataDisplay);

module.exports=router;