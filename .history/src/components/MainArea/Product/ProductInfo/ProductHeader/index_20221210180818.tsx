import Rating from "../../../../Rating";

import styles from "./ProductHeader.module.css";

const ProductHeader = () => {
  return (
    <div className={styles.product_header}>
      <img src="" alt="" />
      <h3>
        Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing
        elit.
      </h3>
      <h4>Men</h4>
      <Rating />
    </div>
  );
};

export default ProductHeader;
