
const express=require("express");
const router= express.Router();
const contactSaveController=require("../controllers/contactController");

router.post("/contactdatasave", contactSaveController.contactRecSave);

module.exports=router;
