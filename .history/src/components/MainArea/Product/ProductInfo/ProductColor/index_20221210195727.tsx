import uuid from "react-uuid";

import styles from "./ProductColor.module.css";

import redColorImg from "../../../../../images/main_area/rounded_img_2.png";
import blackColorImg from "../../../../../images/main_area/rounded_img_1.png";

const ProductColor = () => {
  const colors = [blackColorImg, redColorImg];

  const colorsImages = colors.map((img) => {
    return (
      <div key={uuid()}>
        <img src={img} alt="" />
      </div>
    );
  });

  return (
    <div className={styles.product_color}>
      <h5>Color</h5>
      <div className={styles.colors}>{colorsImages}</div>
    </div>
  );
};

export default ProductColor;
