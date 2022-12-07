import styles from "./Infos.module.css";

import callIcon from "../../../../images/header/offers_and_infos/call_icon.svg";
import cartIcon from "../../../../images/header/offers_and_infos/cart_icon.svg";
import locationPinIcon from "../../../../images/header/offers_and_infos/location_pin_icon.svg";

const Infos = () => {
  return (
    <div className={styles.infos}>
      <div className={styles.single_info}>
        <img src={callIcon} alt="" />
      </div>
    </div>
  );
};

export default Infos;
