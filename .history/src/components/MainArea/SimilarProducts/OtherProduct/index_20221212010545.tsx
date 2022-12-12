import OtherFooter from "./OtherFooter";
import OtherHeader from "./OtherHeader";

import styles from "./OtherProduct.module.css";

const OtherProduct = () => {
  return (
    <div className={styles.other_product}>
      <OtherHeader />
      <OtherFooter />
    </div>
  );
};

export default OtherProduct;
