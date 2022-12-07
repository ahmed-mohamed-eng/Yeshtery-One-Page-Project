import styles from "./Logo.module.css";

import menuIcon from "../../../../images/header/offers_and_infos/menu-bars.svg";
import logoImage from "../../../../images/header/offers_and_infos/yeshtery_logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={menuIcon} alt="Menu" />
      <img src={logoImage} alt="Company Logo" />
    </div>
  );
};

export default Logo;
