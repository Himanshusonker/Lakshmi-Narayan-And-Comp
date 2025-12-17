const SliderImageModel= require("../models/SliderImagesModel");

const SliderImageSave=async(req, res)=>{
    try {
        const {imgpath}= req.body;
        const sliderimagedata= await SliderImageModel.create({
            sliderimage:imgpath
        }).then((data)=>{
            res.status(201).json({message:"Slider Image Save Successfully"});
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



const SliderImageDisplay=async(req, res)=>{
    
    const SliderImageData= await SliderImageModel.find()
    res.status(206).json({message:SliderImageData});
    // console.log(SliderImageData);
    // res.send("Ok");
}

module.exports={
        SliderImageSave,
        SliderImageDisplay
}