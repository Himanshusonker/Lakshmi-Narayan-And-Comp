import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { MdWifiCalling } from "react-icons/md";

const ContactUs=()=>{

const [input, setInput]=useState({});
const navigate=useNavigate();

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(value)
}

const handleSubmit=()=>{
    let url="http://localhost:8000/contact/contactdatasave";
    axios.post(url, input).then((res)=>{
        alert("Data Save Successfully");
        navigate("/home");
        console.log(res.data.message)
    })
}


    return(

        <>  <div className="contactusborder">
                <div className="contactus"> Contact Us </div>
                <div className="contactusengage"> Engage with us or</div>
                <div className="contactusfeedback"> Share Your Valuable Feedback </div>

                <div>
                    <div>
                        <div className="contactusname"> Name </div>
                        <div> <input className="contactusuploaddetail1" type="text" name="pname" value={input.pname} onChange={handleInput} required maxLength="40"/>  </div>
                    </div>

                    <div>
                        <div className="contactusemail"> Email </div>
                        <div> <input className="contactusuploaddetail2" type="text" name="email" value={input.email} onChange={handleInput} required maxLength="40"/>  </div>
                    </div>

                    <div>
                        <div className="contactusmobile"> Mobile </div>
                        <input className="contactusuploaddetail3" type="text" name="mobile" value={input.mobile} onChange={handleInput}/>
                    </div>
                    
                    <div>
                        <div className="contactusmessage"> Message </div>
                        {/* <input className="contactusuploaddetail4" type="textarea" rows="6" cols="45" name="message" value={input.message} onChange={handleInput} required maxLength="100"/> */}
                        < textarea className="contactusuploaddetail4" name="message" value={input.message} onChange={handleInput} required maxLength="330"/>
                    </div>

                    <button className="contactusButtondataupload" onClick={handleSubmit}> Send Message </button>

                </div>
                    {/* <Link>
                        <div> <MdWifiCalling /> </div>
                    </Link> */}
                </div>


{/* ===============================================Footer====================================================== */}            

            <div>
                <Footer/>
            </div>
                    <p></p>
        </>
    );

}
export default ContactUs;