import { useState, useEffect } from "react";
import axios from "axios";

const PurchaseOrderDetail=()=>{
    
    const[mydata, setMydata]=useState([]);

    const loadData=()=>{
        let url="http://localhost:8000/api/payment/delivereddatadisplay";
        axios.get(url).then((res)=>{
            console.log(res.data);
        })
    }

    const loadDatanew=()=>{
        let url="http://localhost:8000/api/payment/orders";
        axios.get(url).then((res)=>{
            console.log(res.data.message);
        })
    }

    useEffect(()=>{
        loadData();
        loadDatanew();
    },[])

    return(
        <>

            <div id="purchaseorderdetailmain">
                <div id="purchaseorderdetainheading">
                    <div id="mainheading" className="rainbowshop"> Delivered Items </div>
                </div>
                <div id="purchaseorderdetailborder">
                    <h1> Purchase Order Detail  </h1>
                    <div>kjhkhk</div>
                </div>
            </div>
        </>
    );
}
export default PurchaseOrderDetail;