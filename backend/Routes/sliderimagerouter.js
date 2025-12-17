const express=require("express");
const router=express.Router();
const userSliderImageController=require("../controllers/sliderimageController");

router.post("/sliderimagesave", userSliderImageController.SliderImageSave);

router.get("/sliderimagedisplay", userSliderImageController.SliderImageDisplay);

module.exports=router;