import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import project from './../../assets/project.jpg'

const Banner = () => {
    return (
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
        <SwiperSlide ><div className='md:h-[500px] h-[400px] w-full flex justify-center items-center'><img src={project} className='w-full h-full'/></div></SwiperSlide>
        <SwiperSlide ><div className='md:h-[500px] h-[400px] w-full flex justify-center items-center'><img src={project} className='w-full h-full'/></div></SwiperSlide>
        <SwiperSlide ><div className='md:h-[500px] h-[400px] w-full flex justify-center items-center'><img src={project} className='w-full h-full'/></div></SwiperSlide>
        <SwiperSlide ><div className='md:h-[500px] h-[400px] w-full flex justify-center items-center'><img src={project} className='w-full h-full'/></div></SwiperSlide>
   
      </Swiper>
        </div>
    );
};

export default Banner;