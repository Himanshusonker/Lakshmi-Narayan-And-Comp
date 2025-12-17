import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineKeyboardVoice } from "react-icons/md";



const Register=()=>{

    const [username, setUsername]=useState("");
    const [image, setImage]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [repassword, setRePassword]=useState("");
    const navigate=useNavigate();




    // const [input, setInput]=useState({});
    // const [myuserlogindata, setMyUserLoginData]=useState([]);

    // const handleInput=(e)=>{
    //     let name=e.target.name;
    //     let value=e.target.value;
    //     setInput(values=>({...values, [name]:value}));
    //     console.log(input);
    // }


    const handleSubmit=()=>{
        let url="http://localhost:8000/userregister/userregisterdatasave";        
        axios.post(url, { username:username, image:image, email:email, password:password, repassword:repassword }).then((res)=>{
            alert(res.data.msg);
            navigate("/login");
            // console.log(res.data);
        })
        // console.log(input);
        // console.log(url);
    }

    // // const loadData=()=>{
    // //     let url="http://localhost:8000/userlogin/userlogindatadisplay";
    // //     axios.get(url).then((res)=>{
    // //         setMyUserLoginData(res.data.address);
    // //         console.log(res.data)
    // //     })
    // //     console.log(url);
    // // }

    // // useEffect(()=>{
    // //     loadData();
    // // },[])

    // // const showuserimage=myuserlogindata.map((key)=>{
    // //     return(
    // //         <>
    // //             <div> {key.image} </div>
    // //         </>
    // //     );
    // // })


    
    


    return(
        <>
            {/* <h1 id="mainheading" className="rainbowshop"> Register Now ! </h1>
            <div className="loginmain">
                <div className="registernowheading"> Register Now! </div>
                <div className="loginheadingsmain">
                    <div className="userloginimage">
                            <FaRegUser  className="userimage"/>
                    </div>
                        <div><img src="{showuserimage}"/>  </div>
                    <div>
                        <div className="logininputmainheading"> Upload Your Image </div>
                        <div className="logintextinput"> <input type="file" name="image" value={input.image} onChange={handleInput}  /> </div>
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
                        Enter Name
                    </div>
                    <div>  
                        <input type="email" className="logininput" name="username" value={input.username} onChange={handleInput} placeholder="Enter your email"/>
                    </div>

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
                        <input type="password" className="logininput" name="password" value={input.password} onChange={handleInput} placeholder="Enter min 4 or max 10 digit password" required minLength="4" maxLength="10"/>
                    </div>
                    
                    <div className="loginheadings">
                        Enter Repassword 
                    </div>
                    <div>
                        <input type="password" className="logininput" name="repassword" value={input.repassword} onChange={handleInput} placeholder="Enter min 4 or max 10 digit password" required minLength="4" maxLength="10" />
                    </div>

                    <button className="loginformbutton" onClick={handleSubmit}> Sign In </button>
                </div>
            </div> */}









            <h1 id="mainheading" className="rainbowshop"> Register Now ! </h1>
            <div className="registermain">
                <div className="registernowheading"> Register Now! </div>
                <div className="loginheadingsmain">
                    <div className="userloginimage">
                            <FaRegUser  className="userimage"/>
                    </div>
                        {/* <div> dfjsdlfjl </div> */}
                    <div>
                        <div className="logininputmainheading"> Upload Your Image </div>
                        <div className="logintextinput"> <input type="file" name="image" value={image} onChange={(e)=>{setImage(e.target.value)}}  /> </div>
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
                        Enter Name
                    </div>
                    <div>  
                        <input type="email" className="logininput" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter your email"/>
                    </div>

                    <div className="loginheadings">
                        Enter Email
                    </div>
                    <div>  
                        <input type="email" className="logininput" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email"/>
                    </div>
                    
                    <div className="loginheadings">
                    Enter Password
                    </div>
                    <div> 
                        <input type="password" className="logininput" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password min 4 or max 10 character" required minLength="4" maxLength="10"/>
                    </div>
                    
                    <div className="loginheadings">
                        Enter Repassword 
                    </div>
                    <div>
                        <input type="password" className="logininput" name="repassword" value={repassword} onChange={(e)=>{setRePassword(e.target.value)}} placeholder="Enter password min 4 or max 10 character" required minLength="4" maxLength="10" />
                    </div>

                    <button className="loginformbutton" onClick={handleSubmit}> Sign In </button>
                </div>
            </div>
        
        </>
    );
}
export default Register;