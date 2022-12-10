import ProductColor from "./ProductColor";
import ProductHeader from "./ProductHeader";

import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={styles.product_info}>
      <ProductHeader />
      <ProductColor />
    </div>
  );
};

export default ProductInfo;
