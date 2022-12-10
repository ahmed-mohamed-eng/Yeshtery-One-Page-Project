import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductHeader from "./ProductHeader";
import PurchaseActions from "./PurchaseActions";

import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={styles.product_info}>
      <ProductHeader />
      <ProductSize />
      <ProductColor />
      <PurchaseActions />
    </div>
  );
};

export default ProductInfo;
