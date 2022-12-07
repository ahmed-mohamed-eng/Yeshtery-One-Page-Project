import styles from "./Offers.module.css";

import leftArrowIcon from "../../../images/header/offers_and_infos/chevo_left_arrow.svg";
import rightArrowIcon from "../../../images/header/offers_and_infos/chevo_right_arrow.svg";

const Offers = () => {
  return (
    <div className={styles.offers}>
      <img src={leftArrowIcon} alt="" />
      <span></span>
      <img src={rightArrowIcon} alt="" />
    </div>
  );
};

export default Offers;
