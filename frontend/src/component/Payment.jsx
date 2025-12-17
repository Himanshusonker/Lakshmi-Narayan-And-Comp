import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment=()=>{

    const cartData= useSelector((state)=>state.cartProduct.cart);
    const [deliverdata, setDeliverdata]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate(); 
    
    let totalAmount=0;
    let totalitem=0;
    let discount=0;
    let grandtotal=0;
    let productDetails=""
    
    const loadData=()=>{
        let url="http://localhost:8000/userdetail/deliverydatadisplay";
        axios.get(url).then((res)=>{
            setDeliverdata(res.data.address);
            // console.log(res.data);
        })
        // console.log(url);
    }

    console.log(cartData);



    // const buynow=()=>{
    //     navigate("/payment");
    // }

    const change=()=>{
        
        navigate("/deliverto");
    }

    const mydata=cartData.map((key)=>{
        totalAmount+=key.price*key.qnty;
        totalitem+=key.qnty;
        discount=(totalAmount/10);
        grandtotal=totalAmount-discount;
        productDetails+=key.pname + " qnty:"+key.qnty+ " rate:"+key.price+ ", ";
        // console.log(totalAmount);
        // console.log(productDetails);
        return(
            <>  
                <div id="cartdatapaymentnow">
                            <div>
                                <div id="cartimageborderpaymentnow">
                                    <img src={key.imagepath} id="cartImagespaymentnow" />
                                </div>
                            </div>
                        
                        
                            <div>
                                <div id="cartdatadetailbuynow">
                                    <div1 id="cartdetailvalue1"> {key.pname} </div1>
                                </div>
                            </div>
                        
                        
                            <div>
                                <div id="cartdatadetailbuynow">
                                    <div1 id="cartdetailvalue2">  {key.pbrand} </div1>
                                </div>
                            </div>
                        
                        
                            <div>
                                 <div id="cartdatadetailbuynow">
                                     <div1 id="cartdetailvalue7">  {key.price} </div1>
                                 </div>
                            </div>    
                </div>  
                           
            </>
        )
    })
    
    const [myproduct, setMyProduct]=useState({price:grandtotal, name:productDetails, img:"t1.jpg"});

    const initPay=(data)=>{
        const options = {
            key: "rzp_test_u9jS13ayTPDqqj",
            amount: data.amount,
            currency: data.currency,
            name: myproduct.name,
            description: "my good t shirt",
            image:myproduct.img,
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyURL ="https://localhost:8000/api/payment/verify";
                    const {data}= await axios.post(verifyURL, response);
                    // console.log(verifyURL);
                } catch (error) {
                    console.log(error)
                }
            },
            theme: {
                color:"#3399cc",
            },
        };
        const rzp1= new window.Razorpay(options);
        rzp1.open();
    };

    const handlePay =async (req, res) =>{
         
        try {
            const orderURL="http://localhost:8000/api/payment/orders";
            const {data}= await axios.post(orderURL,{amount: myproduct.price, productitems:myproduct.name})
                initPay(data.data)
            
            // console.log(orderURL);
            // console.log(data);
            // console.log(url);
            // console.log(myproduct);
        } catch (error) {

        }
    };

    const showdeliveraddress= deliverdata.map((key)=>{
        return(
            <>
                    <div> {key.pname} </div>
                    <div> {key.address} {key.addressarea} </div>
                    <div> {key.mobile} </div> 
            </>
        )
    })

    useEffect(()=>{
        loadData();
    },[])

    return(
        <>
            <h1 className="rainbow" id="mainheading"> Payment Now! </h1>
            <div className="buynowmain">
            <div className="buynowpage">
                <h1 className="ordersummaryheading"> Payment Now </h1>
                
                

                <div className="boxeslinebottom"> </div>
                
                <div className="deliveredaddressmain">
                    <div className="deliveredaddress">
                            <div className="deliveredaddressto"> Diliver to: </div>
                            <div className="deliveredaddresstodetail"> {showdeliveraddress} </div>
                    </div>
                    <div className="deliveredaddressbuttonmain">
                            <button className="deliveredaddressbutton"><div className="deliveredaddressbuttonname" onClick={change}> Change </div></button>
                    </div>
                </div>

                <div id="paymentorderdetailmain"> 
                    <div id="paymentorderdetail"> Order Detail</div>
                </div>

                <div id="paymentnoworderdetail">

                            <div id="cartdatadetailbuynow">
                                <div1 id="cartproductnamebuynow"> Product Name  </div1>
                            </div>
    
                            <div id="cartdatadetailbuynow">
                                <div1 id="cartproductnamebuynow"> Product Brand </div1>
                            </div>


                            <div id="cartdatadetailbuynow">
                                <div1 id="cartproductnamebuynow"> Price </div1>
                            </div>                            
                </div>
                            {mydata}
                
                <div className="pricedetail">
                
                    <div className="pricedetailheadingmain">
                        <div className="pricedetailheading"> Price Details </div>
                    </div>
                    <div className="pricedetailquantity">
                        <div> Price ({totalitem} item) </div>
                        <div className="pricedetailtotalitemamount"><h1> : {totalAmount} </h1></div>
                    </div>
                    
                    <div className="pricedetailquantity">
                        <div> Discount </div>
                        <div className="pricedetaildiscount"><h1> : - {discount} </h1></div>
                    </div>
                    
                   
                        <div className="netpayableamount">
                            <div className="netpayableamountname"><h1> Net Payable Amount  </h1></div><div className="netpayableamountcount"><h1> {grandtotal} </h1></div>
                        </div>
                </div>
                <div className="continuetopayment">
                    <div className="grandtotalfinal">
                        <div> {grandtotal} </div>
                    </div>
                    <div className="continue">
                        <button className="continuebutton" onClick={handlePay}> Payment </button>
                    </div>
                </div>
            
            </div>
            </div>
            
        </>
    );
}
export default Payment;