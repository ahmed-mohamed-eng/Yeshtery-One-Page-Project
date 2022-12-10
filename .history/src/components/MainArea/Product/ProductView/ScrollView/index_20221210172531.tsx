import styles from "./ScrollView.module.css";

import img1 from "../../../../../images/main_area/img_1.png";
import img2 from "../../../../../images/main_area/img_2.png";
import img3 from "../../../../../images/main_area/img_3.png";
import img4 from "../../../../../images/main_area/img_4.png";
import leftArrowIcon from "../../../../../images/main_area/left_arrow_icon.svg";
import rightArrowIcon from "../../../../../images/main_area/right_arrow_icon.svg";

const ScrollView = () => {
  return (
    <div className={styles.scroll_view}>
      <section>
        <img src={leftArrowIcon} alt="" />
      </section>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <section>
        <img src={rightArrowIcon} alt="" />
      </section>
    </div>
  );
};

export default ScrollView;
