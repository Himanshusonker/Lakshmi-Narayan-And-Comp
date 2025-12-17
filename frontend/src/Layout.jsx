import { Link, Outlet } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import logoimg from "./images/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";



let username= window.localStorage.getItem("username");
    
const Layout=()=>{

    const cartItemCount=useSelector((state)=>state.cartProduct.cart);
    const cartItemNumber= cartItemCount.length;
    const navigate=useNavigate();

    const logout=()=>{
        window.localStorage.clear();
        navigate("/home");
    }

    return(
        <>

            <div id="wrapper">
                <div id="headerpositionsticy">
{/*================================================================ Top menu =================================================== */}

                {/* <div id="topmenu">
                    <div id="topmenuleft">
                        <ul>
                            <li> About Us </li>
                            <li> Privacy </li>
                            <li> FAQ </li>
                            <li> Career </li>
                        </ul>
                    </div>
                    <div id="topmenumiddle">
                        <ul>
                            <li> My Wishlist </li>
                            <li> Track Your Order </li>
                        </ul>
                    </div>
                    <div id="topmenuright">
                        <ul>
                            <li id="userlogin">
                                {username}
                            </li>
                            <li>
                                <FaSquareFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <IoLogoYoutube />
                            </li>
                            <li >
                                <Link id="adminuser" to="adminuser"><RiAdminFill /></Link> 
                            </li>
                        </ul>
                    </div>
                </div> */}

{/* ========================================================Main Menu===================================================== */}
                <div id="mainmenu">
                    <div id="mainmenulogo">
                        <img src={logoimg} id="logo" />
                        <div id="shopnow"> Lakshmi Narayan </div>
                        <div id="shopnow1"> and Co. </div>
                    </div>
                    <div id="mainmenumiddle">
                        <ul>
                            <Link to="home" id="mainmenuheading"><li> Home </li></Link>  
                            <Link to="about" id="mainmenuheading"><li> About </li></Link>
                            <Link to="product" id="mainmenuheading"><li> Products </li></Link>
                            <Link to="contact" id="mainmenuheading"><li> Contact </li></Link>
                            {/* <Link to="shop" id="mainmenuheading"><li> Shop </li></Link>
                            <Link to="cartproduct" id="mainmenuheading"><li> My Cart </li></Link>
                            <Link to="contact" id="mainmenuheading"><li> Contact </li></Link> */}
                        </ul>
                    </div>
                    <div id="mainmenuicon">
                        {/* <ul>
                            <li id="searchicon">
                                <CiSearch />
                            </li>
                            <li>
                                <Link id="loginuser" to="login">
                                    <FaRegUser />
                                </Link>
                            </li>
                            <li>
                                <Link id="userlogoutbutton" onClick={logout}>
                                    <RiLogoutCircleRLine/>
                                </Link>
                            </li>
                            <li>
                                <Link id="cartproduct" to="cartproduct">
                                <HiOutlineShoppingCart/> 
                                    <div id="cartcount"> {cartItemNumber} </div>
                                </Link>
                            </li>
                        </ul> */}
                        
                        <Link to="contact" id="requestdemolink" className="requestdemo" >
                        <ul >
                            <li>
                                    Request a Demo 
                            </li>
                        </ul>
                        </Link>
                    </div>
                </div>
            
{/* ==================================================Main Menu Bottom===================================================== */}

                <div id="mainmenubottom">
                    <span> At Lakshmi Narayan & Co, we specialize in manufacturing and exporting a wide range of eco-friendly disposable products and export all Other Products as per your requirement. <Link to="contact" id="mainmenubottomshopnow"> Order Now </Link> </span>
                </div>
            </div>
                        <Outlet/>
                </div>


        </>
    );
}
export default Layout;