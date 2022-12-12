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
    </div>
  );
};

export default OtherHeader;
