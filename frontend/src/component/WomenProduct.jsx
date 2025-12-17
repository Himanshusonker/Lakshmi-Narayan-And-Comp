import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../productSlice";
import axios from "axios";

const Women=()=>{

    const [totalproduct, setTotalProduct]= useState([]);
    const myProductData=useSelector((state)=>state.cartProduct.cart);
    console.log(myProductData);
    const dispatch=useDispatch();

    const loadTotalProduct=()=>{
        let url="http://localhost:8000/product/womenproduct";
        axios.get(url).then((res)=>{
            setTotalProduct(res.data.message);
            // console.log(res.data.message);
        });
    }

const totalproductData=totalproduct.map((key)=>{
    return(
        <>
            <div id="shopitem">
                <img src={key.imagepath} id="camera"/>
                
                    <div id="itemname">
             
                        {key.pname}  
                        <br/>
                        Brand: {key.pbrand}
                        <br/>
                        Price: {key.price}
                        <br/>
                        <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
                             description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                
                    </div>
            </div>
        </>
    );
})

    useEffect(()=>{
        loadTotalProduct();
    },[])

    return(
        <>
            <div className="totalproduct">
            <div id="featuredItems">
                    <div id="heading">
                    <h1 id="mainheading">
                        <div className="rainbowshop">Women Collection </div>
                    </h1>
                    </div>
                    <div className="blockshop" id="shopfeaturedItemList">
                        {totalproductData}  
                    </div>
        </div>
    </div>
            
            
        </>
    );
}
export default Women;