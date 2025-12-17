import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../productSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BuyNow=()=>{
    
    const cartData= useSelector((state)=>state.cartProduct.cart);
    const [deliverdata, setDeliverdata]=useState([]);



    const loadData=()=>{
        let url="http://localhost:8000/userdetail/deliverydatadisplay";
        axios.get(url).then((res)=>{
            setDeliverdata(res.data.address);
            // console.log(res.data);
        })
        // console.log(url);
    }



    console.log(cartData);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const quanIncrease=(id)=>{
        dispatch(increaseQuantity(id));
    }

    const quanDecrease=(id)=>{
        dispatch(decreaseQuantity(id));
    }

    const itemRemove=(id)=>{
        dispatch(removeItem(id));
    }

    const buynow=()=>{
        navigate("/payment");
    }

    const change=()=>{
        navigate("/deliverto");
    }


    let totalAmount=0;
    let totalitem=0;
    let discount=0;
    let grandtotal=0;


    const mydata=cartData.map((key)=>{
        totalAmount+=key.price*key.qnty;
        totalitem+=key.qnty;
        discount=(totalAmount/10);
        grandtotal=totalAmount-discount;
        return(
            <>  
                <div id="cartdata">
                    <div id="cartimageborderbuynow">
                         <img src={key.imagepath} width="500px" id="cartImages" />
                    </div>                    
                    
                    <div id="cartdatadetailbuynow">
                        <div>
                            <div1 id="cartproductnamebuynow"> Product Name  </div1>
                                <div1 id="cartdetailvalue1"> : {key.pname} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductnamebuynow"> Product Brand </div1>
                                <div1 id="cartdetailvalue2"> : {key.pbrand} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductnamebuynow"> Description </div1>
                                <div1 id="cartdetailvalue3"> : {key.description} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductnamebuynow"> Category </div1>
                                <div1 id="cartdetailvalue4"> : {key.category} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductnamebuynow"> Subcategory </div1>
                                <div1 id="cartdetailvalue5"> : {key.subcategory} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductnamebuynow"> Tags </div1>
                                <div1 id="cartdetailvalue6"> : {key.tags} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductnamebuynow"> Price </div1>
                                <div1 id="cartdetailvalue7"> : {key.price} </div1>
                        </div>


                        <div id="quantityborder">
                            <div id="quantityheadingbuynow">
                                    Quantity
                            </div>
                            <button className="quantitybuttonincrease" onClick={()=>{quanIncrease(key.id)}}> +1 </button>
                                <div id="quantitycountbuynow"> {key.qnty} </div>
                            <button className="quantitybuttondescrease" onClick={()=>{quanDecrease(key.id)}}> -1 </button>
                            <div id="quantitytotalbuynow">
                                    Total  <div1 id="quantitytotalcountbuynow">: {key.price*key.qnty} </div1>
                            </div>
                            <button className="removeproductdetail" onClick={()=>{itemRemove(key.id)}}> Remove </button>    
                        </div>


                    </div>      
                </div>  
                           
            </>
        )
    })
    

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
            <h1 className="rainbow" id="mainheading"> Order Summary </h1>
            <div className="buynowmain">
            <div className="buynowpage">
                <h1 className="ordersummaryheading"> Order Summary </h1>
                
                <div className="boxesmain" >
                    
                    <div>
                        <div className="boxes">
                            <div className="boxesnumber"> 1 </div>
                                <div className="boxesname">
                                    <div> Address </div>
                                </div>
                            <div className="boxesline">  </div>  
                        </div>
                    </div>
                    
                    <div>
                        <div className="boxes">
                            <div className="boxesnumber"> 2 </div>
                                <div className="boxesname">
                                    <div> Order Summary </div>
                                </div>
                            <div className="boxesline">  </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="boxes">
                            <div className="boxesnumber"> 3 </div>
                                <div className="boxesname">
                                    <div > Payment </div>
                                </div>
                        </div>
                    </div>
                </div>

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

                <div>
                          {mydata}
                </div>
                
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
                        <button className="continuebutton" onClick={()=>{buynow()}}> Continue </button>
                    </div>
                </div>


            
            </div>
            </div>
                

        </>
    );
}
export default BuyNow;