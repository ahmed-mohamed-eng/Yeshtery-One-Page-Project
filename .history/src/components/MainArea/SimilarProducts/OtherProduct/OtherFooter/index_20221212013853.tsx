import styles from "./OtherFooter.module.css";

import startIcon from "../../../../../images/main_area/start_icon.svg";
import filledStartIcon from "../../../../../images/main_area/star_filled_icon.svg";

const OtherFooter = () => {
  return (
    <div className={styles.other_footer}>
      <div>
        <div>
          <img src={filledStartIcon} alt="" />
          <img src={filledStartIcon} alt="" />
          <img src={filledStartIcon} alt="" />
          <img src={filledStartIcon} alt="" />
          <img src={startIcon} alt="" />
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <p>
        <span></span>
      </p>
    </div>
  );
};

export default OtherFooter;
