const userregisterModel=require("../models/registerModel");
const bcrypt=require("bcryptjs");

const UserRegisterDataSave=async(req, res)=>{

    try {
        const {username ,image, email, password, repassword }= req.body;

            if(password!=repassword)
            {
                res.status(215).json({msg:"Password does not match"});
            }
            else
            {
                bcrypt.genSalt(10, function (err, Salt){
 
                    if(err)
                    {
                        return console.log("Cannot");
                    }
                    else
                    {
                    bcrypt.hash(password, Salt, function (err, hash){

                        if(err)
                        {
                            return console.log("Cannot encrypt");
                        }
                        hashedPassword = hash;
                        // console.log(hash);
                        const myData=new userregisterModel({
                            username:username,
                            image:image,
                            email:email,
                            password:hash
                        })
                        myData.save();
                        res.json({msg:"User Register Data Save Successfully"});
                    })
                }
                })
                // res.status(202).json({msg:"Password Verifi Successfully"});
            }
             

            
            // const myData= new userregisterModel({
            //     username:username,
            //     image:image,
            //     email:email,
            //     password:hash
            // })
            // await myData.save().then((data)=>{
            //     res.status(201).json({msg:"User Register Data Save Successfully"});
            // }) 
            // console.log(myData);
            // myData.save()
        // console.log(req.body);
        // console.log("hiii");
        // res.send("Ok");
    } catch (error) {
        
    }
}

const UserRegistrationDataDisplay=async(req, res)=>{
    
    try {
        const userregistrationdata=await userregisterModel.find();
            res.status(202).json({address:userregistrationdata});
        // console.log(deliverdatadisplay)
    } catch (error) {
    console.log(error)
    res.status(401).json("Invalid Credential");
    }

    // console.log("hiii");
}

module.exports={
        UserRegisterDataSave,
        UserRegistrationDataDisplay
}