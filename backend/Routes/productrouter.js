
const express=require("express");
const router=express.Router();
const userProductController=require("../controllers/productController");

router.post("/productdatasave", userProductController.ProductDataSave);

router.get("/featureproduct", userProductController.featureProductDisplay);

router.get("/featureproduct2", userProductController.featureProductDisplay2);

router.get("/featureproduct3", userProductController.featureProductDisplay3);

router.get("/featureproduct4", userProductController.featureProductDisplay4);

router.get("/topSelectiondis", userProductController.TopSelectionDis);

router.get("/topSelectiondis1", userProductController.TopSelectionDis1);

router.get("/topSelectiondis2", userProductController.TopSelectionDis2);

router.get("/topSelectiondis3", userProductController.TopSelectionDis3);

router.get("/latestProductdis", userProductController.LatestProductDis);

router.get("/latestProductdis1", userProductController.LatestProductDis1);

router.get("/latestProductdis2", userProductController.LatestProductDis2);

router.get("/latestProductdis3", userProductController.LatestProductDis3);

router.get("/totalproduct", userProductController.TotalProductDisplay);

router.get("/mensproduct", userProductController.MensProduct);

router.get("/womenproduct", userProductController.WomenProduct);

router.get("/babyproduct", userProductController.BabyProduct);

module.exports=router;