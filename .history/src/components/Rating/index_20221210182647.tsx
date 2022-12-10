import styles from "./Rating.module.css";

import starIcon from "../../images/main_area/start_icon.svg";
import filledStarIcon from "../../images/main_area/star_filled_icon.svg";

export interface RatingProps {
  rate?: number;
  customerRates?: number;
}

const Rating = (props: RatingProps) => {
  let rate: number = returnRate(props.rate);

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

function returnRate(rate?: number) {
  if (rate && rate > 5) {
    return 5;
  } else if (rate && rate < 0) {
    return 0;
  } else {
    return rate || 0;
  }
}
