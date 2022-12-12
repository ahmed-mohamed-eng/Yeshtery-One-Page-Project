import OtherFooter from "./OtherFooter";
import OtherHeader, { OtherHeaderProps } from "./OtherHeader";

import styles from "./OtherProduct.module.css";

export interface OtherProductProps extends OtherHeaderProps {}

const OtherProduct = (props: OtherProductProps) => {
  return (
    <div className={styles.other_product}>
      <OtherHeader imgSrc={props.imgSrc} />
      <OtherFooter />
    </div>
  );
};

export default OtherProduct;
