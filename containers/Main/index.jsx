import {
  useEffect,
  useState
} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import TextBlock from "@/components/TextBlock";

import styles from "./index.module.scss";

import MENU_ICON      from "../../public/menu_icon.png";
import DOWNWAVE_SVG   from '../../public/downwave.svg'
import UPWAVE_SVG     from "../../public/upwave.svg";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirst, setIsFirst] = useState(true)
  const [width, setWidth] = useState()

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChange = (i) => {
    if (i === 0) {
      setIsFirst(true)
    } else {
      setIsFirst(false)
    }
  }

  const fn = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (window !== undefined) {
      fn()
      window.addEventListener('resize', fn)

      return () => {
        window.removeEventListener('resize', fn)
      }
    }
  }, [])

  return (
      <div className={styles.main}>
        <img style={{transform: `translateX(-${isFirst ? 0 : width}px)`}} className={styles.upWave} src={UPWAVE_SVG.src} alt="" />
        <Navbar
          handleClose={handleClose}
          isOpen={isOpen}
        />
        <div className={styles.slider}>
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={0}
            loop={false}
            draggable={false}
            modules={[Navigation]}
            onActiveIndexChange={(s) => handleChange(s.activeIndex)}
            navigation={{
              nextEl: '.swiper-next-btn-main',
              prevEl: '.swiper-prev-btn-main'
            }}
            allowTouchMove={false}
            className={styles.swiper}
          >
            <SwiperSlide>
              <Container>
                <div className={styles.header}>
                  <div onClick={handleOpen}>
                    <img
                      className={styles.icon}
                      src={MENU_ICON.src}
                      alt="menu"
                    />
                  </div>
                </div>
                <TextBlock isFirst />
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container>
                <div className={styles.header}>
                  <div onClick={handleOpen}>
                    <img
                      className={styles.icon}
                      src={MENU_ICON.src}
                      alt="menu"
                    />
                  </div>
                </div>
                <TextBlock isFirst={false} />
              </Container>
            </SwiperSlide>
          </Swiper>
        </div>
        <img style={{transform: `translateX(-${isFirst ? 0 : width}px)`}} className={styles.downWave} src={DOWNWAVE_SVG.src} alt="" />
      </div>
  );
};

export default Main;
