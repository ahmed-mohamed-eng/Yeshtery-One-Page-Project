import styles from "./MainView.module.css";

import imgOne from "../../../../../images/main_area/img_1.png";
import icon360 from "../../../../../images/main_area/360_icon.png";

const MainView = () => {
  return (
    <div className={styles.main_view}>
      <button>
        <img src={icon360} alt="View product in 360 degree" />
      </button>
      <img src={imgOne} alt="" />
    </div>
  );
};

export default MainView;
