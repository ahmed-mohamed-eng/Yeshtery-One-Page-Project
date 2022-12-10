import styles from "./ScrollView.module.css";

import Slider, { Settings } from "react-slick";

import img1 from "../../../../../images/main_area/img_1.png";
import img2 from "../../../../../images/main_area/img_2.png";
import img3 from "../../../../../images/main_area/img_3.png";
import img4 from "../../../../../images/main_area/img_4.png";

const ScrollView = () => {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.scroll_view}>
      <Slider {...sliderSettings}></Slider>
    </div>
  );
};

export default ScrollView;
