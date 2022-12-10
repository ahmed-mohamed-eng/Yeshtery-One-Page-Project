import ProductInfo from "./ProductInfo";
import ProductView from "./ProductView";

import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <ProductView />
      <ProductInfo />
    </div>
  );
};

export default Product;
