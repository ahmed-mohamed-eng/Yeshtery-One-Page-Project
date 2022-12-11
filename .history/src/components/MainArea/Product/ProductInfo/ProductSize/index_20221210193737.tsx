import uuid from "react-uuid";

import styles from "./ProductSize.module.css";

const ProductSize = () => {
  const sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];

  const displayedSizes = sizes.map((size) => {
    return (
      <button key={uuid()}>
        <span>{size}</span>
      </button>
    );
  });

  return (
    <div className={styles.product_size}>
      <h5>Size</h5>
      <div></div>
    </div>
  );
};

export default ProductSize;
