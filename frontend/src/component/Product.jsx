import { Link } from "react-router-dom";
import Footer from "./Footer";
import { IoIosStar } from "react-icons/io";

const Product=()=>{

    return(
        <>
                <div className="ProductPageBorder"> 
                        <div className="ProductPage"> See Our Products </div>
                
                        <Link to="contact">            
                                    <div className="ProductImagesDisplay">
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN1.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN2.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN3.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN4.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN5.jpg" />
                                                </div>
                                            </div>
                                    </div>
                
                
                                    <div className="ProductImagesDisplay">
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN6.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN7.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN8.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN9.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN10.jpg" />
                                                </div>
                                            </div>
                                    </div>
                
                
                                    <div className="ProductImagesDisplay">
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN11.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN12.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN13.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN14.jpg" />
                                                </div>
                                            </div>
                
                                            <div className="img1">
                                                <div> 
                                                    <img src="src/images/LN15.jpg" />
                                                </div>
                                            </div>
                                    </div>
                
                            </Link>
                                    
                                        <div className="ProductImagesDisplay2">
                                                <div className="img2">
                                                    <Link to="contact"> 
                                                        <img src="src/images/LN16.jpg" />
                                                    </Link>
                                                </div>
                                            
                                                <div className="ProductImagesDetail2">
                                                    <p>At Lakshmi Narayan & Co, our plates, bowls, containers, spoons, and clam shell <br/>
                                                    boxes are designed to deliver the perfect balance of strength, sustainability,
                                                    and <br/> versatility. Crafted from  high-quality, food-grade paper,
                                                    these containers are ideal <br/> for packaging and serving a wide range 
                                                    of food items—both hot and cold—while <br/> maintaining freshness and  
                                                    hygiene.<br/><br/> Each container is leak-resistant, sturdy, and eco-friendly,
                                                    making it an ideal choice <br/> for restaurants, catering services, takeaways,
                                                    and export  markets seeking sustainable <br/> packaging  alternatives. Our 
                                                    containers come in various sizes and capacities to suit <br/> diverse serving needs,
                                                    all while being fully biodegradable and recyclable.<br/><br/>
                
                                                    Each Clam Shell Boxes are crafted to offer the perfect combination of durability,<br/>
                                                    convenience, and eco-friendliness. Made from premium, food-grade biodegradable <br/> material,
                                                    these boxes are ideal for packaging and serving burgers, sandwiches, <br/> snacks, and other 
                                                    takeaway meals while ensuring hygiene and freshness.<br/><br/>
                
                                                    Our Round Plates with Sections are thoughtfully designed to combine functionality, <br/> elegance,
                                                    and sustainability. Made from premium, food-grade biodegradable material, <br/> these plates feature 
                                                    multiple compartments that keep different food items separated, <br/> ensuring a clean and organized 
                                                    dining experience.
                                                    </p>
                                                </div>    
                                        </div>
                
                                        <Link to="contact" id="ProductPrice" className="ProductPrice">
                                            <div> SEE PRICING </div>
                                        </Link>
                </div>


{/* ======================================================Other Products==================================================== */}

                    <div className="OtherProductsBorder">

                        <div className="OtherProducts"> Other Products </div>

                        <div className="OtherProductBorderPart1">
                            <div className="OtherProductsBorderPart2"> 
                                <div> 
                                    <div className="OtherProductsFAQ"> F.A.Q. </div>
                                    <div className="OtherProductsEverything"> Everything You Need to Know, All in One Place </div>
                                    <div className="OtherProductsFind"> Find quick answers to common questions about our eco-friendly 
                                        disposable products, Other products as per your requirement, export process, packaging, and 
                                        global delivery services. We’re here to make your experience with Lakshmi Narayan & Co simple, 
                                        transparent, and hassle-free. </div>
                                </div>
                            </div>


                            <div className="OtherProductsBorderPart2">
                                <div>
                                    <div className="OtherProductsStar">
                                            <div className="OtherProductsStarIcon"> <IoIosStar /> </div>
                                            <div className="OtherProductsPart2Provide"> Everything is provide as per your need. </div>
                                    </div>
                                        
                                    <div className="OtherProductsStar">
                                            <div className="OtherProductsStarIcon"> <IoIosStar /> </div>
                                            <div className="OtherProductsPart2Provide"> We export worldwide our products are trusted by clients across Asia, the Middle East, Europe, and Africa, meeting international quality and safety standards.  </div>
                                    </div>

                                    <div className="OtherProductsStar">
                                            <div className="OtherProductsStarIcon"> <IoIosStar /> </div>
                                            <div className="OtherProductsPart2Provide"> We provide custom export packaging and branding options tailored to your business requirements, ensuring product protection and presentation. </div>
                                    </div>
                                    
                                    <div className="OtherProductsStar">
                                            <div className="OtherProductsStarIcon"> <IoIosStar /> </div>
                                            <div className="OtherProductsPart2Provide"> Every batch undergoes strict quality checks and is handled by our experienced logistics team to maintain a 99% on-time delivery rate for global shipments. </div>
                                    </div>
                                    
                                    <div className="OtherProductsWant">
                                        <div className="OtherProductsWhatDoYouWant"> What Do You Want? </div> 
                                        
                                        <div>
                                            <Link to="contact" id="OtherProductsOrderNow" className="OtherProductsOrderNow">
                                                <div > Order Now </div>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


            
{/* ===============================================Footer====================================================== */}

            <div>
                <Footer/>
            </div>
                                                <p></p>
        
        
        </>
    );

}
export default Product;