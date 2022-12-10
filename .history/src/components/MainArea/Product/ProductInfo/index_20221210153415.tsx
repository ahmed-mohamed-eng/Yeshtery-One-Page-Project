import ProductColor from "./ProductColor";
import ProductHeader from "./ProductHeader";

import styles from "./ProductInfo.module.css";
import ProductSize from "./ProductSize";

const ProductInfo = () => {
  return (
    <div className={styles.product_info}>
      <ProductHeader />
      <ProductSize />
      <ProductColor />
    </div>
  );
};

export default ProductInfo;
