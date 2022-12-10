import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductHeader from "./ProductHeader";

import styles from "./ProductInfo.module.css";
import PurchaseActions from "./PurchaseActions";

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
