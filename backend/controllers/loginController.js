const bcrypt=require("bcryptjs");
const jwt= require("jsonwebtoken");
const userregisterModel=require("../models/registerModel");
const loginModel=require("../models/loginModel");

const UserLoginCheck=async(req, res)=>{
    try {

        const { email, password }= req.body;
        const myuseremail= await userregisterModel.find({email:email});

        if(myuseremail.length<1)
        {
            res.send({msg:"Invalid Credential"});
        }
        else
        {
            const match= await bcrypt.compare(password, myuseremail[0].password);
            const accessToken= jwt.sign(JSON.stringify(myuseremail[0]), process.env.TOKEN_SECRET)
            if(match)
            {
                res.json({accessToken: accessToken, username:myuseremail[0].username, email:myuseremail[0].email });
            }
            else
            {
                res.json({msg:"Invalid Credential"})
            }
            console.log(match);
            console.log(accessToken)
            console.log(password);
            // res.send({msg:"Valid Email"})
        }
        // console.log(myuseremail);
        // res.send("Ok");
    } catch (error) {
            console.log(error);
            res.status(400).JSON({msg:"Invalid Credential"});
    }
    
    
}

const UserLoginDataDisplay=async(req, res)=>{

        try {
        const userlogindatadisplay=await loginModel.find();
            res.status(202).json({address:userlogindatadisplay});
        // console.log(deliverdatadisplay)
    } catch (error) {
    console.log(error)
    res.status(401).json("Invalid Credential");
    }
    // console.log("hiii");
}



module.exports={
        UserLoginCheck,
        UserLoginDataDisplay
}