import uuid from "react-uuid";

import styles from "./Rating.module.css";

import starIcon from "../../images/main_area/start_icon.svg";
import filledStarIcon from "../../images/main_area/star_filled_icon.svg";

export interface RatingProps {
  rate?: number;
  customerRates?: number;
}

const Rating = (props: RatingProps) => {
  const totalAvailableRates = 5;
  const rate: number = returnRate(props.rate);

  const filledStars = createArray(rate).map(() => {
    return <img src={filledStarIcon} alt="" key={uuid()} />;
  });

  const emptyStars = createArray(totalAvailableRates - rate).map(() => {
    return <img src={starIcon} alt="" key={uuid()} />;
  });

  return (
    <div className={styles.rating}>
      <div>
        {filledStars}
        {emptyStars}
      </div>

      <div>
        {rate} of {totalAvailableRates}
      </div>

      <div>
        <span>{props.customerRates || 0} Rates</span>
      </div>
    </div>
  );
};

export default Rating;

function returnRate(rate?: number) {
  const correctRate = Math.floor(rate || 0);

  if (correctRate > 5) {
    return 5;
  } else if (correctRate < 0) {
    return 0;
  } else {
    return correctRate;
  }
}

function createArray(numOfElements: number) {
  return new Array(numOfElements).fill(0);
}
