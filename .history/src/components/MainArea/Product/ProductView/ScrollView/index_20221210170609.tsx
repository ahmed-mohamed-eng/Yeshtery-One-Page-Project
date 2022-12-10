import styles from "./ScrollView.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../../../images/main_area/img_1.png";
import img2 from "../../../../../images/main_area/img_2.png";
import img3 from "../../../../../images/main_area/img_3.png";
import img4 from "../../../../../images/main_area/img_4.png";

const ScrollView = () => {
  return (
    <div className={styles.scroll_view}>
      <Swiper
        allowSlideNext
        allowSlidePrev
        autoplay
        autoHeight
        centeredSlides
        effect="slide"
        direction="horizontal"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ScrollView;
