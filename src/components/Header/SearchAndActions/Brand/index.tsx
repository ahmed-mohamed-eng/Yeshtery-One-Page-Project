import styles from "./Brand.module.css";

import brandLogo from "../../../../images/header/search_and_actions/brand_logo.svg";

const Brand = () => {
  return (
    <div className={styles.brand}>
      <img src={brandLogo} alt="Brand Name" />
    </div>
  );
};

export default Brand;
