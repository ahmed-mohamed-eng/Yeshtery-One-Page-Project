import MainView from "./MainView";
import styles from "./ProductView.module.css";
import ScrollView from "./ScrollView";

const ProductView = () => {
  return (
    <div className={styles.product_view}>
      <MainView />
      <ScrollView />
    </div>
  );
};

export default ProductView;
