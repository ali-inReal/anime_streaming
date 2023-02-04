import React from 'react'
import "./TrendingSlider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {carousel} from "../../data/carousel.js"
export default function TrendingSlider() {
  return (
    <div
     style={{
      borderBottom:"2px solid #6DE5F2",
      padding:"1rem",
     }}
    >
    <Swiper
    modules={[ Pagination]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      
        {
            carousel.map(
                (anime,index)=>{
                    const summary=anime.synopsis.slice(0,395);
                    return (
                        <SwiperSlide  className='slide' >
                        
                        <div className="trending-card"  >
                       
                           <div className="trending-card-image"  >
                             <img src={anime.banner} width="100%" height={"100%"}  />
                           </div>
                           <div className="trending-card-desc">
                           <h1>{anime.title}</h1>
                           <p>
                           {summary}................................................
                           </p>
                           <button className='trending-card-button'>Details</button>
                           </div>
                           

                        </div>
                        </SwiperSlide>
                    )
                }
            )
        }
    
    </Swiper>
    </div>
  )
}
