import styles from "./OtherHeader.module.css";

import icon360 from "../../../../../images/main_area/360_icon.png";
import adidasLogo from "../../../../../images/main_area/adidas_logo.svg";
export interface OtherHeaderProps {
  imgSrc: string;
}

const OtherHeader = (props: OtherHeaderProps) => {
  return (
    <div className={styles.other_header}>
      <div className={styles.main_image}>
        <img src={props.imgSrc} alt="" />
        <span>
          <img src={icon360} alt="" />
        </span>
      </div>
      <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
      <div>
        <div>
          <span>9,999 LE</span>
          <div>
            <span>9,999 LE</span>
            <span>50%</span>
          </div>
        </div>
        <div>
          <img src={adidasLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OtherHeader;
