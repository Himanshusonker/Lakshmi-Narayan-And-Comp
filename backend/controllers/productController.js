



const productModel=require("../models/UserProductModel");



const ProductDataSave=async(req, res)=>{

    try {
        const {pname, pbrand, description, price}= req.body;
        const productdata= await productModel.create({
            pname:pname,
            pbrand:pbrand,
            description:description,
            price:price,
        }).then((data)=>{
            res.status(201).json({message:"Product Data Save Successfully"});
        })
        // console.log(productdata);
        // res.send("Data Save!!!")
        // console.log(req.body)
        //     res.send("ok");
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Invalid Credential"})
    }
}

const featureProductDisplay=async(req, res)=>{
        try {
        const DataDisplay= await productModel.find({tags:"Featured_Products"})
            // console.log(DataDisplay);
            res.status(202).json({message:DataDisplay});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(DataDisplay);
    // console.log("hiii");
}

const featureProductDisplay2=async(req, res)=>{
    try {
        const DataDisplay= await productModel.find({tags:"Featured_Products"}).skip(1);
            // console.log(DataDisplay);
            res.status(202).json({message:DataDisplay});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(DataDisplay);
    // console.log("hiii");
}

const featureProductDisplay3=async(req, res)=>{
    try {
        const DataDisplay= await productModel.find({tags:"Featured_Products"}).skip(2);
            // console.log(DataDisplay);
            res.status(202).json({message:DataDisplay});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(DataDisplay);
    // console.log("hiii");
}

const featureProductDisplay4=async(req, res)=>{
    try {
        const DataDisplay= await productModel.find({tags:"Featured_Products"}).skip(3);
            // console.log(DataDisplay);
            res.status(202).json({message:DataDisplay});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(DataDisplay);
    // console.log("hiii");
}

const TopSelectionDis=async(req, res)=>{
    try {
        const TopSelectionData= await productModel.find({tags:"Top_Selection"})
            res.status(202).json({message:TopSelectionData});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(TopSelectionData);
    // console.log("hiii");
}

const TopSelectionDis1=async(req, res)=>{
    try {
        const TopSelectionData1= await productModel.find({tags:"Top_Selection"}).skip(1);
            res.status(202).json({message:TopSelectionData1});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(TopSelectionData);
    // console.log("hiii");
}

const TopSelectionDis2=async(req, res)=>{
    try {
        const TopSelectionData2= await productModel.find({tags:"Top_Selection"}).skip(2)
            res.status(202).json({message:TopSelectionData2});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(TopSelectionData);
    // console.log("hiii");
}

const TopSelectionDis3=async(req, res)=>{
    try {
        const TopSelectionData3= await productModel.find({tags:"Top_Selection"}).skip(3);
            res.status(202).json({message:TopSelectionData3});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(TopSelectionData);
    // console.log("hiii");
}

const LatestProductDis=async(req, res)=>{
    try {
        const LatestItemData= await productModel.find({tags:"Latest_Products"})
            res.status(202).json({message:LatestItemData});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

const LatestProductDis1=async(req, res)=>{
    try {
        const LatestItemData1= await productModel.find({tags:"Latest_Products"}).skip(1);
            res.status(202).json({message:LatestItemData1});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

const LatestProductDis2=async(req, res)=>{
    try {
        const LatestItemData2= await productModel.find({tags:"Latest_Products"}).skip(2);
            res.status(202).json({message:LatestItemData2});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

const LatestProductDis3=async(req, res)=>{
    try {
        const LatestItemData3= await productModel.find({tags:"Latest_Products"}).skip(3);
            res.status(202).json({message:LatestItemData3});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

const TotalProductDisplay=async(req, res)=>{
    try {
        const TotalProductData= await productModel.find()
            res.status(202).json({message:TotalProductData});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(TotalProductData);
    // console.log("hiii");

}

const MensProduct=async(req, res)=>{
    try {
        const MensData= await productModel.find({category:"Male"});
            res.status(202).json({message:MensData});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

const WomenProduct=async(req, res)=>{
    try {
        const WomenData= await productModel.find({category:"Female"});
            res.status(202).json({message:WomenData});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

const BabyProduct=async(req, res)=>{
    try {
        const WomenData= await productModel.find({category:"Kids"});
            res.status(202).json({message:WomenData});
        } catch (error) {
            console.log(error)
            res.status(404).json({message:"Invalid Credential"});
        }
        // console.log(LatestItemData);
    // console.log("hiii");
}

module.exports={
        ProductDataSave,
        featureProductDisplay,
        featureProductDisplay2,
        featureProductDisplay3,
        featureProductDisplay4,
        TopSelectionDis,
        TopSelectionDis1,
        TopSelectionDis2,
        TopSelectionDis3,
        LatestProductDis,
        LatestProductDis1,
        LatestProductDis2,
        LatestProductDis3,
        TotalProductDisplay,
        MensProduct,
        WomenProduct,
        BabyProduct
}