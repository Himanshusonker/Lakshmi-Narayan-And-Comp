import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardVoice } from "react-icons/md";


const Login=()=>{

    const [input, setInput]=useState("");
    const [myuserlogindata, setMyUserLoginData]=useState([]);
    const navigate=useNavigate();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let url="http://localhost:8000/userlogin/userlogincheck";
        axios.post(url, input).then((res)=>{
            
            if(res.data.email==undefined || res.data.username==undefined)
            {
                alert("Invalid Credential");
                navigate("/login/registernow");
            }
            else
            {
                window.localStorage.setItem("username", res.data.username);
                window.localStorage.setItem("email", res.data.email);
                navigate("/home");
            }
                  
            // console.log(res.data.email);
            // console.log(res.data.username);
            // navigate("/home");
            // console.log(res.data);
        })
        // console.log(input);
        // console.log(url);
    }


    const loadData=()=>{
        let url="http://localhost:8000/userregister/userregisterdatadisplay";
        axios.get(url).then((res)=>{
            console.log(res.data.address);
            // console.log(res.data)
        })
        console.log(url);
    }

    // useEffect(()=>{
    //     loadData();
    // },[])

    // const showuserimage=myuserlogindata.map((key)=>{
    //     return(
    //         <>
    //             <div> {key.image} </div>
    //         </>
    //     );
    // })

    return(
        <>
                <h1 id="mainheading" className="rainbowshop"> Login Now ! </h1>
            <div className="loginmain">
                <div className="loginnowheading"> Login Now! </div>
                <div className="loginheadingsmain">
                    <div className="userloginimage">
                            <FaRegUser  className="userimage"/>
                    </div>
                        <div> 
                            {/* dfsfds */}
                        </div>
                    
                    <div className="loginheadings">
                        Speak Now! 
                    </div>
                    <div className="logininputbuttonhover">
                        <input type="button" className="logininputbutton" name="voice"/>
                        <div><MdOutlineKeyboardVoice className="speaknowlogo"/></div>
                    </div>
                    <div className="loginnowheadingor"> or use your account </div>
                    
                    <div className="loginheadings">
                        Enter Email
                    </div>
                    <div>  
                        <input type="email" className="logininput" name="email" value={input.email} onChange={handleInput} placeholder="Enter your email"/>
                    </div>
                   
                    <div className="loginheadings">
                    Enter Password
                    </div>
                    <div> 
                        <input type="password" className="logininput" name="password" value={input.password} onChange={handleInput} placeholder="Enter password min 4 or max 10 character" required minLength="4" maxLength="10"/>
                    </div>
                    
                    <button className="loginformbutton" onClick={handleSubmit}> Sign In  </button>
                    <Link to="registernow" id="registernow"> register now </Link>
                </div>
            </div>

        </>
    );
}
export default Login;