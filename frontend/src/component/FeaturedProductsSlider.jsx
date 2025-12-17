import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'Swiper/css';
import 'Swiper/css/pagination';
import 'Swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const FeaturedProductsSlider=()=>{

    const [featureProductDis, setFeatureProductDis]= useState([]);
    const [featureProductDis2, setFeatureProductDis2]= useState([]);
    const [featureProductDis3, setFeatureProductDis3]= useState([]);
    const [featureProductDis4, setFeatureProductDis4]= useState([]);
    
    const loadFeatureProduct=()=>{
        let url="http://localhost:8000/product/featureproduct";
        axios.get(url).then((res)=>{
            setFeatureProductDis(res.data.message);
            console.log(res.data.message);
        });
    }

    const loadFeatureProduct2=()=>{
        let url="http://localhost:8000/product/featureproduct2";
        axios.get(url).then((res)=>{
            setFeatureProductDis2(res.data.message);
            console.log(res.data.message);
        });
    }


    const loadFeatureProduct3=()=>{
        let url="http://localhost:8000/product/featureproduct3";
        axios.get(url).then((res)=>{
            setFeatureProductDis3(res.data.message);
            console.log(res.data.message);
        });
    }


    const loadFeatureProduct4=()=>{
        let url="http://localhost:8000/product/featureproduct4";
        axios.get(url).then((res)=>{
            setFeatureProductDis4(res.data.message);
            console.log(res.data.message);
        });
    }

    const featureData=featureProductDis.map((key)=>{
        return(
            <>
            
            <SwiperSlide id="featureproductslidermain">
                <div id="featureproductslider">
                <div id="item1">
                    <img src={key.imagepath} id="camera"/>
                    
                        <div id="itemname">
                 
                            {key.pname}  
                            <br/>
                            Brand: {key.pbrand}
                            <br/>
                            Price: {key.price}
                            <br/>
                            <button className="button1"> Add To Cart </button>
                    
                        </div>
                </div>
                </div>
            </SwiperSlide>
            </>
        );
    })


    const featureData2=featureProductDis2.map((key)=>{
        return(
            <>
            
            <SwiperSlide id="featureproductslidermain">
                <div id="featureproductslider">
                <div id="item1">
                    <img src={key.imagepath} id="camera"/>
                    
                        <div id="itemname">
                 
                            {key.pname}  
                            <br/>
                            Brand: {key.pbrand}
                            <br/>
                            Price: {key.price}
                            <br/>
                            <button className="button1"> Add To Cart </button>
                    
                        </div>
                </div>
                </div>
            </SwiperSlide>
            </>
        );
    })


    const featureData3=featureProductDis3.map((key)=>{
        return(
            <>
            
            <SwiperSlide id="featureproductslidermain">
                <div id="featureproductslider">
                <div id="item1">
                    <img src={key.imagepath} id="camera"/>
                    
                        <div id="itemname">
                 
                            {key.pname}  
                            <br/>
                            Brand: {key.pbrand}
                            <br/>
                            Price: {key.price}
                            <br/>
                            <button className="button1"> Add To Cart </button>
                    
                        </div>
                </div>
                </div>
            </SwiperSlide>
            </>
        );
    })


    const featureData4=featureProductDis4.map((key)=>{
        return(
            <>
            
            <SwiperSlide id="featureproductslidermain">
                <div id="featureproductslider">
                <div id="item1">
                    <img src={key.imagepath} id="camera"/>
                    
                        <div id="itemname">
                 
                            {key.pname}  
                            <br/>
                            Brand: {key.pbrand}
                            <br/>
                            Price: {key.price}
                            <br/>
                            <button className="button1"> Add To Cart </button>
                    
                        </div>
                </div>
                </div>
            </SwiperSlide>
            </>
        );
    })


    useEffect(()=>{
        loadFeatureProduct();
        loadFeatureProduct2();
        loadFeatureProduct3();
        loadFeatureProduct4();
    },[])

    return(
        <>
            
        
            <div id="featuredproductanswer">
                <div className="featureproductslider1">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction:false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
      >
                {featureData}  
                    </Swiper>
                </div>

                <div className="featureproductslider1">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction:false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
      >
                {featureData2}  
                    </Swiper>
                </div>

                
                <div className="featureproductslider1">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction:false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
      >
                {featureData3}  
                    </Swiper>
                </div>


                <div className="featureproductslider1">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction:false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
      >
                {featureData4}  
                    </Swiper>
                </div>

            </div>
                        
            </>
        
        
    );
}
export default FeaturedProductsSlider;