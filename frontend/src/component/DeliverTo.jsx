import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeliverTo=()=>{

    const[input, setInput]=useState("");
    const navigate=useNavigate();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    

    const handleSubmit=()=>{
        let url="http://localhost:8000/userdetail/deliverydatasave"
        axios.post(url, input).then((res)=>{
            alert(res.data.msg);
            navigate("/buynow")
            // console.log(res.data);
        })
        // console.log(input);
    }

    return(
        <>
            <div className="delivertomain">
            <div className="deliverto">
                <h1 className="delivertoheading"> Add Delivery Address </h1>
                <div>
                    <input type="text" className="delivertoinput" name="pname" value={input.pname} onChange={handleInput} placeholder="Full Name (Required)*" />
                </div>
                <div>
                    <input type="text" className="delivertoinput" name="mobile" value={input.mobile} onChange={handleInput}  placeholder="Phone Number (Required)*" required maxLength="10"/>
                </div>
                <div>
                    <input type="text" className="delivertoinput" name="altmobile" value={input.altmobile} onChange={handleInput} placeholder="Add Alternate Phone Number (Required)*" required maxLength="10"/>
                </div>
                <div>
                    <input type="text" className="delivertoinput" name="pincode" value={input.pincode} onChange={handleInput}  placeholder="Pincode (Required)*" required maxLength="6"/>
                </div>
                <div className="delivertoinputmain">
                    <input type="text" className="delivertoinput1" name="state" value={input.state} onChange={handleInput} placeholder="State (Required)*"/>
                    <input type="text" className="delivertoinput1" name="city" value={input.city} onChange={handleInput} placeholder="City (Required)*"/>
                </div>
                <div>
                    <input type="text" className="delivertoinput" name="address" value={input.address} onChange={handleInput} placeholder="House No., Building Name (Required)*"/>
                </div>
                <div>
                    <input type="text" className="delivertoinput" name="addressarea" value={input.addressarea} onChange={handleInput} placeholder="Road Name, Area, Colony (Required)*"/>
                </div>
                <div>
                    <input type="text" className="delivertoinput" name="nearby" value={input.nearby} onChange={handleInput} placeholder="Add Nearby Famous Shop/Mall/Landmark (Required)*"/>
                </div>
                <div className="delivertobuttonmain">
                    <button className="delivertobutton" onClick={handleSubmit} > Save Address </button>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default DeliverTo;