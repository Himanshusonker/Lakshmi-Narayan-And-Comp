
const express=require("express");
const mongoose=require("mongoose");
const app=express();
require('dotenv').config();

const Router=require("./Routes/router");

const ProductRouter=require("./Routes/productrouter");

const SliderImageRouter=require("./Routes/sliderimagerouter");

const DeliverAddressRouter=require("./Routes/deliverrouter");

const PaymentRouter=require("./Routes/paymentrouter");

const UserLoginRouter=require("./Routes/loginrouter");

const UserRegisterRouter=require("./Routes/registerrouter");

const ContactSaveRouter=require("./Routes/contactrouter");

const cors=require('cors');
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
mongoose.connect(process.env.DATABASE_URL+process.env.DATABASE_NAME)
const PORT=process.env.PORT       ||       7070

app.use("/admin", Router);

app.use("/product", ProductRouter);

app.use("/image", SliderImageRouter);

app.use("/userdetail", DeliverAddressRouter);

app.use("/api/payment", PaymentRouter);

app.use("/userlogin", UserLoginRouter);

app.use("/userregister", UserRegisterRouter);

app.use("/contact", ContactSaveRouter);

app.listen(PORT, ()=>{
    console.log("app run on: "+PORT)
})