import MainView from "./MainView";
import ScrollView from "./ScrollView";

import styles from "./ProductView.module.css";

const ProductView = () => {
  return (
    <div className={styles.product_view}>
      <MainView />
      <ScrollView />
    </div>
  );
};

export default ProductView;
