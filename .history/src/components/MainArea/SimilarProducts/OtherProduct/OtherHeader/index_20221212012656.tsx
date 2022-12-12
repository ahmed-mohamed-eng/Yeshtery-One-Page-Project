import styles from "./OtherHeader.module.css";

import icon360 from "../../../../../images/main_area/360_icon.png";

export interface OtherHeaderProps {
  imgSrc: string;
}

const OtherHeader = (props: OtherHeaderProps) => {
  return (
    <div className={styles.other_header}>
      <div>
        <img src={props.imgSrc} alt="" />
        <span>
          <img src={icon360} alt="" />
        </span>
      </div>
      <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h4>
    </div>
  );
};

export default OtherHeader;
