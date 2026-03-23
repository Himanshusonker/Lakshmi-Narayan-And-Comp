import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io5";

const Footer=()=>{
    return(
        <>
    <div className="FooterBottom">
                
                <div className="FooterBottom1">
                    <div>
                    <div className="Footerlogo"> <img src="/src/images/logo.png"/> </div>
                </div>       
                    <div className="FooterPart1"> 
                        <p> At Lakshmi Narayan & Co, we take pride in being a trusted manufacturer <br/>
                            and exporter of eco-friendly disposable products including plates,bowls,<br/>
                            spoons, containers, and clam shell boxes. With a strong focus on quality,<br/>
                            sustainability, and customer satisfaction, we deliver products that meet<br/>
                            global standards and support a greener planet. Together, let’s serve <br/>
                            responsibly and build a sustainable future—one product at a time.
                        </p> 
                    </div>
                    <div className="FooterPart2">        
                        <div className="FooterPart2A"> 
    
                            <div className="FooterAllPart"> Products </div>
    
                            <div id="FooterAllParta"><a href="home"> Home </a></div>
                            <div id="FooterAllParta"><a href="about"> About Us </a></div>
                            <div id="FooterAllParta"><a href="product"> Products </a></div>
                            <div id="FooterAllParta"><a href="contact"> Contact Us </a></div>
                               
                        </div>
    
                        <div> 
                            <div className="FooterAllPart"> Company </div>
                            <div> Career </div>
                            <div> News </div>
                            <div> Terms & Conditions </div>
                            <div> Privacy Policy </div>
                        </div>
                    </div>
    
                    <div className="FooterPart3"> 
                            <div className="FooterAllPart"> Resources </div>
                            <Link to="https://mail.google.com/mail/u/2/#inbox?compose=CllgCHrgDHVLbnMFmlFZcbHBpXCKXkJQKtHtqTBFqJwDVXpjLDGPbDRSKwqKrnWhHsJvzpllmwL"className="FooterAllPartaemail" ><div> infolakshminarayanandco@gmail.com </div></Link>
                            <div> +91 9335187678 </div>
                            <div> 76/229 Kuli Bazar Kanpur Nagar </div>
                            <div> Help Centre </div>
                            <div> Tutorials </div>
                            <div> Support </div>
                    </div>
    
                    <div className="facebookicon">
                        <div className="facebooklink">  </div>
                                <Link to="https://www.facebook.com/profile.php?id=61584288896198" id="facebooklink" >
                                    <FaSquareFacebook/>  
                                </Link>
                    </div>


                </div>
    
                <div className="FooterBottomLine"> <hr/> </div>
    
                <div className="FooterCopyright"> Copyright &copy;2024 | Designed & Managed By Lakshmi Narayan & Co.</div>
                
            </div>
            <p></p>

        </>
    );
}
export default Footer;