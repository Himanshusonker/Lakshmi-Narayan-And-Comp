import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../productSlice";
import React, { useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'Swiper/css';
import 'Swiper/css/pagination';
import 'Swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Banner from "./Banner";
import Footer from "./Footer";
// import Border from "./Border";
import axios from "axios";
import { IoIosStar } from "react-icons/io";
import { IoStarHalf } from "react-icons/io5";

const Home=()=>{

    
    
    
    

    // const [featureProductDis, setFeatureProductDis]= useState([]);
    // const [featureProductDis2, setFeatureProductDis2]= useState([]);
    // const [featureProductDis3, setFeatureProductDis3]= useState([]);
    // const [featureProductDis4, setFeatureProductDis4]= useState([]);
    // const [topselectionDis, setTopSelectionDis]= useState([]);
    // const [topselectionDis1, setTopSelectionDis1]= useState([]);
    // const [topselectionDis2, setTopSelectionDis2]= useState([]);
    // const [topselectionDis3, setTopSelectionDis3]= useState([]);
    // const [latestProductDis, setLatestProductDis]=useState([]);
    // const [latestProductDis1, setLatestProductDis1]=useState([]);
    // const [latestProductDis2, setLatestProductDis2]=useState([]);
    // const [latestProductDis3, setLatestProductDis3]=useState([]);

//     const myProductData=useSelector((state)=>state.cartProduct.cart);
//     console.log(myProductData);
//     const dispatch=useDispatch();


//     const loadFeatureProduct=()=>{
//         let url="http://localhost:8000/product/featureproduct";
//         axios.get(url).then((res)=>{
//             setFeatureProductDis(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadFeatureProduct2=()=>{
//         let url="http://localhost:8000/product/featureproduct2";
//         axios.get(url).then((res)=>{
//             setFeatureProductDis2(res.data.message);
//             console.log(res.data.message);
//         });
//     }


//     const loadFeatureProduct3=()=>{
//         let url="http://localhost:8000/product/featureproduct3";
//         axios.get(url).then((res)=>{
//             setFeatureProductDis3(res.data.message);
//             console.log(res.data.message);
//         });
//     }


//     const loadFeatureProduct4=()=>{
//         let url="http://localhost:8000/product/featureproduct4";
//         axios.get(url).then((res)=>{
//             setFeatureProductDis4(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadtopselection=()=>{
        
//         let url="http://localhost:8000/product/topSelectiondis";
//         axios.get(url).then((res)=>{
//             setTopSelectionDis(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadtopselection1=()=>{
        
//         let url="http://localhost:8000/product/topSelectiondis1";
//         axios.get(url).then((res)=>{
//             setTopSelectionDis1(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadtopselection2=()=>{
        
//         let url="http://localhost:8000/product/topSelectiondis2";
//         axios.get(url).then((res)=>{
//             setTopSelectionDis2(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadtopselection3=()=>{
        
//         let url="http://localhost:8000/product/topSelectiondis3";
//         axios.get(url).then((res)=>{
//             setTopSelectionDis3(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadlatestproduct=()=>{
//         let url="http://localhost:8000/product/latestProductdis";
//         axios.get(url).then((res)=>{
//             setLatestProductDis(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadlatestproduct1=()=>{
//         let url="http://localhost:8000/product/latestProductdis1";
//         axios.get(url).then((res)=>{
//             setLatestProductDis1(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadlatestproduct2=()=>{
//         let url="http://localhost:8000/product/latestProductdis2";
//         axios.get(url).then((res)=>{
//             setLatestProductDis2(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const loadlatestproduct3=()=>{
//         let url="http://localhost:8000/product/latestProductdis3";
//         axios.get(url).then((res)=>{
//             setLatestProductDis3(res.data.message);
//             console.log(res.data.message);
//         });
//     }

//     const featureData=featureProductDis.map((key)=>{
//         return(
//             <>
            
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//             </>
//         );
//     })


//     const featureData2=featureProductDis2.map((key)=>{
//         return(
//             <>
            
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//             </>
//         );
//     })


//     const featureData3=featureProductDis3.map((key)=>{
//         return(
//             <>
            
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//             </>
//         );
//     })


//     const featureData4=featureProductDis4.map((key)=>{
//         return(
//             <>
            
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//             </>
//         );
//     })


// const topselectionData=topselectionDis.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


// const topselectionData1=topselectionDis1.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


// const topselectionData2=topselectionDis2.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


// const topselectionData3=topselectionDis3.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })

// const latestProductData=latestProductDis.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


// const latestProductData1=latestProductDis1.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


// const latestProductData2=latestProductDis2.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


// const latestProductData3=latestProductDis3.map((key)=>{
//     return(
//         <>
//             <SwiperSlide id="featureproductslidermain">
//                 <div id="featureproductslider">
//                 <div id="item1">
//                     <img src={key.imagepath} id="camera"/>
                    
//                         <div id="itemname">
                 
//                             {key.pname}  
//                             <br/>
//                             Brand: {key.pbrand}
//                             <br/>
//                             Price: {key.price}
//                             <br/>
//                             <button className="button1" onClick={()=>{dispatch(addtoCart({id:key._id, pname:key.pname, pbrand:key.pbrand,
//                              description:key.description, category:key.category, subcategory:key.subcategory, tags:key.tags , price:key.price, imagepath:key.imagepath, qnty:1 }))}}> Add To Cart </button>
                    
//                         </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//         </>
//     );
// })


//     useEffect(()=>{
//         loadFeatureProduct();
//         loadFeatureProduct2();
//         loadFeatureProduct3();
//         loadFeatureProduct4();
//         loadtopselection();
//         loadtopselection1();
//         loadtopselection2();
//         loadtopselection3();
//         loadlatestproduct();
//         loadlatestproduct1();
//         loadlatestproduct2();
//         loadlatestproduct3();
//     },[])

    return(
        <>
{/* =====================================================Slider Images====================================================== */}    
                <div>
                     <Banner/>
                </div>

                {/* <div id="HomeSliderAnimation1" > 
                    <marquee>
                        Welcome To Lakshmi Narayan & Co. Website
                    </marquee>
                </div> */}




{/* =======================================================About Us====================================================== */}

                <div className="AboutUsborder">
                    <div className="AboutUs"> About Us </div>
                    
                    <div className="Aboutdisplay">
                        <div className="Aboutdisplaymargin"> 
                                <div className="CompanyName"> Lakshmi Narayan & Co. </div>
                                <div className="CompanySub"> Sustainability in Every Serve, <br/> Excellence in Every Product </div>
                                <div className="CompanyProductDetail"> At Lakshmi Narayan & Co , we specialize in manufacturing and exporting a wide range of
                                    <br/><br/> eco-friendly disposable products including plates, bowls, containers, spoons, and clam shell
                                    <br/><br/> boxes.Designed with precision and sustainability in mind, our disposables combine quality,
                                    <br/><br/> durability, and environmental responsibility—making them ideal for businesses, events, and
                                    <br/><br/> global hospitality industries. With years of expertise and a commitment to innovation, we
                                    <br/><br/> deliver products that help the world serve better, sustainably. </div>

                            <div>

                                <div className="AboutNumflex">
                                    
                                    <div>
                                        <div className="AboutNum"> 100% </div>
                                        <div className="AboutNumDetail"> Customer Satisfaction </div>
                                    </div>

                                    <div>
                                        <div className="AboutNum"> 100+ </div>
                                        <div className="AboutNumDetail"> Countries Covered </div>
                                    </div>

                                    <div>
                                        <div className="AboutNum" id="AboutNum"> 98% </div>
                                        <div className="AboutNumDetail"> Repeat International Orders </div>
                                    </div>
                                </div>

                                <Link to="about" id="AboutUsButton" className="AboutUsButton">
                                    <div > Read More </div>
                                 
                                </Link>
                                    
                            </div>
                        </div>
                        <div className="AboutImg1"> 
                            <img src="src/images/Bagasse Product.jpg"/> 
                        </div>
                    </div>
                    
                </div>


            <div className="AboutUsPart2border">

                <div className="AboutUsPart2core"> Core Features </div>
                <div className="AboutUsPart2Why"> Why Global Clients Rely on </div>
                <div className="AboutUsPart2Company"> Lakshmi Narayan & Co. </div>

        <div className="AboutUsPart2ContentBorder">
                <div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image1.jpg" /></div></span>
                        <span className="AboutUsPart2ContentName">Global Quality Assurance</span>
                    </div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image3.webp" /></div> </span>
                        <span className="AboutUsPart2ContentName">Wide Product Portfolio</span>
                    </div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image2.webp" /></div></span>
                        <span className="AboutUsPart2ContentName">Competitive Pricing Advantage</span>
                    </div>

                </div>


            <div >

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image2.webp" /></div></span>
                        <span className="AboutUsPart2ContentName">Eco-Friendly Commitment</span>
                    </div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image1.jpg" /></div></span>
                        <span className="AboutUsPart2ContentName">Custom Packaging Solutions</span>
                    </div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image3.webp" /></div></span>
                        <span className="AboutUsPart2ContentName">Dedicated Export Support</span>
                    </div>

            </div>

            <div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image3.webp" /></div></span>
                        <span className="AboutUsPart2ContentName">Trusted Export Partner</span>
                    </div>                    

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image2.webp" /></div></span>
                        <span className="AboutUsPart2ContentName">Efficient Global Logistics</span>
                    </div>

                    <div>
                        <span className="AboutUsPart2ContentImage"><div className="AboutUsPart2ImageUp"><img src="/src/images/AboutPart2Image1.jpg" /></div></span>
                        <span className="AboutUsPart2ContentName">Long-Term Client Relationships</span>
                    </div>

                </div>
            </div>

                    <Link to="contact" id="AboutUsPart2Enquire" className="AboutUsPart2Enquire">
                            <div > Enquire Now </div>
                                 
                    </Link>

        </div>

                <div className="AboutUsPart3Border">

                    <div className="AboutUsPart3Testimonial"> Testimonial </div>
                    <div className="AboutUsPart3Insight"> Insights from </div>
                    <div className="AboutUsPart3Satisfied"> Satisfied Customers </div>



                
                    

                    <div className="AboutUsPart3aBorderDisplayflex" >

                        <div className="AboutUsPart3aBorderDisplayflex2">

                        <div className="AboutUsPart3aBorder">
                            <div className="AboutUsPart3Rating">
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoStarHalf /> </div>
                            </div>

                            <div className="AboutUsPart3aworking"> <p>Working with Lakshmi Narayan &amp; Co has been a remarkable experience. Their eco-<br/>
                            friendly disposable products stand out in quality, finish, and durability. Every order <br/> 
                            we placed arrived exactly as promised — neatly packed, well-documented, and on time. Their 
                            export team is highly professional and always ready to assist with quick <br/>
                            responses and complete transparency. We truly value them as a long-term partner.</p> 
                            </div>
                            
                            <div className="AboutUsPart3workingImageDisplay">
                                <div className="AboutUsPart3aimage"> <img src="/src/images/Hector Hansen.jpg" /> </div>
                                <div className="AboutUsPart3aimageName"> <div> Hector Hansen </div></div>
                            </div>
                        </div>
                    </div>

                    <div className="AboutUsPart3aBorderDisplayflex2">
                        <div className="AboutUsPart3aBorder">
                            <div className="AboutUsPart3Rating">
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoStarHalf /> </div>
                            </div>

                            <div className="AboutUsPart3aworking"> <p>As an international distributor of food packaging products, we have very high 
                                standards — and Lakshmi Narayan &amp; Co meets them all. Their biodegradable 
                                plates, bowls, containers not only meet global safety norms but also help us 
                                promote eco-friendly living in our market. Their consistency in quality, export 
                                packaging, and delivery timelines has strengthened our business relationship <br/>
                                over the years.</p> 
                            </div>
                            
                            <div className="AboutUsPart3workingImageDisplay">
                                <div className="AboutUsPart3aimage"> <img src="/src/images/Carolyn Hardy.jpg" /> </div>
                                <div className="AboutUsPart3aimageName"> <div> Carolyn Hardy </div></div>
                            </div>
                        </div>
                    </div>

                    <div className="AboutUsPart3aBorderDisplayflex2">
                        <div className="AboutUsPart3aBorder">
                            <div className="AboutUsPart3Rating">
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoStarHalf /> </div>
                            </div>

                            <div className="AboutUsPart3aworking"> <p>We started importing from Lakshmi Narayan &amp; Co a year ago, and the experience has been nothing short of excellent. From clear export documentation to smooth logistics coordination, everything is handled professionally. Their disposable products are reliable, eco-friendly, and priced competitively for international markets. They’re not just a supplier — they’re a partner we trust for long-term collaboration.</p> 
                            </div>
                            
                            <div className="AboutUsPart3workingImageDisplay">
                                <div className="AboutUsPart3aimage"> <img src="/src/images/Joshua Benson.jpg" /> </div>
                                <div className="AboutUsPart3aimageName"> <div> Joshua Benson </div></div>
                            </div>
                        </div>
                    </div>

                    <div className="AboutUsPart3aBorderDisplayflex2">
                        <div className="AboutUsPart3aBorder">
                            <div className="AboutUsPart3Rating">
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoIosStar /> </div>
                                <div> <IoStarHalf /> </div>
                            </div>

                            <div className="AboutUsPart3aworking"> <p>As an international distributor of food packaging products, we have very high 
                                standards — and Lakshmi Narayan &amp; Co meets them all. Their biodegradable 
                                plates, bowls, containers not only meet global safety norms but also help us 
                                promote eco-friendly living in our market. Their consistency in quality, export 
                                packaging, and delivery timelines has strengthened our business relationship <br/>
                                over the years.</p> 
                            </div>
                            
                            <div className="AboutUsPart3workingImageDisplay">
                                <div className="AboutUsPart3aimage"> <img src="/src/images/Alana Burnett.jpg" /> </div>
                                <div className="AboutUsPart3aimageName"> <div> Alana Burnett </div></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>

                
            







{/* =====================================================Product Images====================================================== */}


                <div className="ProductImages">
                    
                    <div className="Product">
                        <div> See Our Products </div>
                    </div>
        <Link to="contact">
                    
                    <div className="ProductImagesDisplay" >
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

            </Link >
                    
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
                            <div > SEE PRICING </div>
                                 
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





{/* ======================================================Footer==================================================== */}
            
        {/* <div className="FooterBottom">
            
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

                        <Link><div> Home </div></Link>
                        <Link><div> About Us </div></Link>
                        <Link><div> Products </div></Link>
                        <Link><div> Contact Us </div></Link>
                           
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
                        <div> info@lakshminarayanandco.in </div>
                        <div> +91 9335187678 </div>
                        <div> 76/229 Kuli Bazar Kanpur Nagar </div>
                        <div> Help Centre </div>
                        <div> Tutorials </div>
                        <div> Support </div>
                </div>

                <div className="facebookicon">
                    <div className="facebooklink">  </div>
                            <Link id="facebooklink" >
                                <FaSquareFacebook/>  
                            </Link>
                </div>
            </div>

            <div className="FooterBottomLine"> <hr/> </div>

            <div className="FooterCopyright"> Copyright &copy;2024 | Designed & Managed By Lakshmi Narayan & Co.</div>

        </div>
        <p></p> */}


{/* ===============================================Footer====================================================== */}

            <div>
                <Footer/>
            </div>
            
        </>
    );
}
export default Home;