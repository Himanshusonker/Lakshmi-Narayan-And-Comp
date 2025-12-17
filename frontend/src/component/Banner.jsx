import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import SL1 from "../images/SL1.jpg";
// import SL2 from "../images/SL2.jpg";
// import SL3 from "../images/SL3.jpg";
// import SL4 from "../images/SL4.jpg";
// import SL5 from "../images/SL5.jpg";
// import SL6 from "../images/SL6.jpg";
// import SL7 from "../images/SL7.jpg";
// import SL8 from "../images/SL8.jpg";
// import SL9 from "../images/SL9.jpg";
// import SL10 from "../images/SL10.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner=()=>{
    const [mydata, setMydata]=useState([]);

    const loadData=()=>{    
      let url="http://localhost:8000/image/sliderimagedisplay"
      axios.get(url).then((res)=>{
        setMydata(res.data.message)
        console.log(res.data.message);
      })
    }

    const myans=mydata.map((key)=>{
      return(
          <>
              <SwiperSlide>
                  <div className="bannerimageslidermain">
                      <div className="bannerimageslider"><img src={key.sliderimage} className="bannerimagesliderimg" /></div>
                  </div>
              </SwiperSlide>
          </>
      );
    })

    useEffect(()=>{
      loadData();
    },[])

    return(
        <>
          <div>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {myans}
        {/* <SwiperSlide><img src={SL1} /></SwiperSlide>
        <SwiperSlide><img src={SL2} /></SwiperSlide>
        <SwiperSlide><img src={SL3} /></SwiperSlide>
        <SwiperSlide><img src={SL4} /></SwiperSlide>
        <SwiperSlide><img src={SL5} /></SwiperSlide>
        <SwiperSlide><img src={SL6} /></SwiperSlide>
        <SwiperSlide><img src={SL7} /></SwiperSlide>
        <SwiperSlide><img src={SL8} /></SwiperSlide>
        <SwiperSlide><img src={SL9} /></SwiperSlide>
        <SwiperSlide><img src={SL10} /></SwiperSlide> */}
      </Swiper>
      </div>
        </>
    );
}
export default Banner;