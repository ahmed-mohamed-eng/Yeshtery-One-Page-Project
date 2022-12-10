import styles from "./Rating.module.css";

import starIcon from "../../images/main_area/start_icon.svg";
import filledStarIcon from "../../images/main_area/star_filled_icon.svg";

export interface RatingProps {
  rate?: number;
  customerRates?: number;
}

const Rating = (props: RatingProps) => {
  let rate: number;
  if (props.rate && props.rate > 5) {
    rate = 5;
  } else if (props.rate && props < 0) {
    rate = 0;
  } else {
    rate = props.rate || 0;
  }

  let ratesArr = new Array(rate).fill(0);
  ratesArr = ratesArr.map((rate, idx) => {});

  return (
    <div className={styles.rating}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Rating;
