import styles from "./Product.module.css";
import ProductInfo from "./ProductInfo";
import ProductView from "./ProductView";

const Product = () => {
  return (
    <div className={styles.product}>
      <ProductView />
      <ProductInfo />
    </div>
  );
};

export default Product;
