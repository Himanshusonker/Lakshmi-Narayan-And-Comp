import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../productSlice";
import { useNavigate } from "react-router-dom";

const CartProduct=()=>{
    
    const cartData= useSelector((state)=>state.cartProduct.cart);
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
        navigate("/buynow");
    }


    let totalAmount=0;
    let totalitem=0;

    const mydata=cartData.map((key)=>{
        totalAmount+=key.price*key.qnty;
        totalitem+=key.qnty;
        return(
            <>  
                <div id="cartdata">
                    <div id="cartimageborder">
                         <img src={key.imagepath} width="500px" id="cartImages" />
                    </div>                    
                    
                    <div id="cartdatadetail">
                        <div>
                            <div1 id="cartproductname"> Product Name  </div1>
                                <div1 id="cartdetailvalue1"> : {key.pname} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductname"> Product Brand </div1>
                                <div1 id="cartdetailvalue2"> : {key.pbrand} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductname"> Description </div1>
                                <div1 id="cartdetailvalue3"> : {key.description} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductname"> Category </div1>
                                <div1 id="cartdetailvalue4"> : {key.category} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductname"> Subcategory </div1>
                                <div1 id="cartdetailvalue5"> : {key.subcategory} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductname"> Tags </div1>
                                <div1 id="cartdetailvalue6"> : {key.tags} </div1>
                        </div>
                        <div>
                            <div1 id="cartproductname"> Price </div1>
                                <div1 id="cartdetailvalue7"> : {key.price} </div1>
                        </div>


                        <div id="quantityborder">
                            <div id="quantityheading">
                                    Quantity
                            </div>
                            <button className="quantitybuttonincrease" onClick={()=>{quanIncrease(key.id)}}> +1 </button>
                                <div id="quantitycount"> {key.qnty} </div>
                            <button className="quantitybuttondescrease" onClick={()=>{quanDecrease(key.id)}}> -1 </button>
                            <div id="quantitytotal">
                                    Total  <div1 id="quantitytotalcount">: {key.price*key.qnty} </div1>
                            </div>
                            <button className="removeproductdetail" onClick={()=>{itemRemove(key.id)}}> Remove </button>    
                        </div>
                                 
                    </div>
                                    
                </div>  
                           
            </>
        )
    })



    return(
        <>
            <div id="mainheading" className="rainbowshop"> My Cart Items </div>
                
                <div>
                        {mydata}
                </div>
                <div className="totalitem">
                <div className="totalitemname"> Total Items: </div> <div className="totalitemcount"> {totalitem} </div>
                </div>
                <div className="grandtotal">
                   <div className="grandtotalname"> Grant Total :</div> <div className="grandtotalcount"> {totalAmount} </div>
                </div>
                <div className="buynowcenter">
                    <button className="buynow" onClick={()=>{buynow()}}> Buy Now </button>
                </div>
        </>
    );
}
export default CartProduct;