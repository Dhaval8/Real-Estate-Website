import React from 'react';
import './Residencies.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { color } from 'framer-motion';
import { PuffLoader } from 'react-spinners';



import { slidersettings } from '../../utils/common';
import PropertiesCard from '../PropertiesCard/PropertiesCard';
import useProperties from '../../hooks/useProperties';
const Residencies=()=>{
    const {data , isError , isLoading} = useProperties()
    if(isError)
    {
      return(
        <div className='wrapper'>
          <span>Error while fetching the data</span>
        </div>
      )
    }
    if(isLoading)
    {
        return(
          <div className='wrapper flexCenter' style={{height:"60vh"}}>
            <PuffLoader height="80"
              width="80"
              radius={1}
              color='#000000'
            />
          </div>
        )
    }
    return (
        <div id="residencies" className="r-wrapper">
          <div className="paddings innerWidth r-container">
            <div className="flexColStart r-head">
              <span className="orangeText">Best Choices</span>
              <span className="primaryText">Popular Residencies</span>
            </div>
            <Swiper {...slidersettings}>
              {/* slider */}
              {data.slice(0, 8).map((card, i) => (
                <SwiperSlide key={i}>
                  <PropertiesCard card={card}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
    };
export default Residencies;
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};
