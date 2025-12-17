
const router=require("express").Router();
const userloginController=require("../controllers/loginController");

router.post("/userlogincheck", userloginController.UserLoginCheck);

router.get("/userlogindatadisplay", userloginController.UserLoginDataDisplay);

module.exports=router;