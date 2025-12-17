const express=require("express");
const router=express.Router();
const userController=require("../controllers/userController");

router.post("/adminuserlogin", userController.AdminUserLogin);



module.exports=router;