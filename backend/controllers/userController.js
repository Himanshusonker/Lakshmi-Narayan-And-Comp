const adminModel= require("../models/adminUserModel");

const AdminUserLogin=async(req, res)=>{
    
    try {
        const {email, password}=req.body;
        await adminModel.findOne({email:email}).then((user)=>{

            if(user) 
            {
                if(user.password === password)
                    {
                        res.status(201).json("Success")
                    }
                else
                {
                    res.status(401).json("Invalid Credential");
                }    
            }
            else
            {
                res.status(402).json("No Record Existed");
            }
        })
        // console.log(user);
        // console.log(email);
        // console.log(password);    
    } catch (error) {
        console.log(error)
        res.status(400).json("Invalid Credential");
    }   
}

module.exports={
        AdminUserLogin
}