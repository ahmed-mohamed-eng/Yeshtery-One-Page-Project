import Product from "./Product";

import styles from "./MainArea.module.css";
import SimilarProducts from "./SimilarProducts";

const MainArea = () => {
  return (
    <main className={styles.main_area}>
      <Product />
      <SimilarProducts />
    </main>
  );
};

export default MainArea;
