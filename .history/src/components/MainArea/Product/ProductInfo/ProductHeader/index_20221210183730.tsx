import Price from "../../../../Price";
import Rating from "../../../../Rating";

import styles from "./ProductHeader.module.css";

import adidasLogo from "../../../../../images/main_area/adidas_logo.svg";

const ProductHeader = () => {
  return (
    <div className={styles.product_header}>
      <img src={adidasLogo} alt="Product Logo" />
      <h3>
        Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing
        elit.
      </h3>
      <h4>Men</h4>
      <Rating customerRates={22} />
      <Price />
    </div>
  );
};

export default ProductHeader;
