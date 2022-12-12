import OtherProduct from "./OtherProduct";
import SimilarHeader from "./SimilarHeader";

import styles from "./SimilarProducts.module.css";

const SimilarProducts = () => {
  return (
    <div className={styles.similar_product}>
      <SimilarHeader />
      <OtherProduct />
    </div>
  );
};

export default SimilarProducts;
