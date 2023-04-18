import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import styles from"./index.module.scss";

import SLIDER_ARROW from '../../public/sliderarrow.svg';
import SLIDE1_SVG from "../../public/slide1.svg";
import SLIDE2_SVG from "../../public/slide2.svg";
import SLIDE3_SVG from "../../public/slide3.svg";
import SLIDER_BACKGROUND_SVG from "../../public/sliderbackground.svg";

export default function Slider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.swiper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn'
          }}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={SLIDE1_SVG.src} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={SLIDE2_SVG.src} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={SLIDE3_SVG.src} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.buttons}>
        <div className='swiper-prev-btn'><img src={SLIDER_ARROW.src} alt='next' /></div>
        <div className='swiper-next-btn'><img src={SLIDER_ARROW.src} alt='prev' /></div>
      </div>
      <img src={SLIDER_BACKGROUND_SVG.src} className={styles.background} alt='background' />
    </div>
  );
}
