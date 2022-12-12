import OtherProduct from "./OtherProduct";
import SimilarHeader from "./SimilarHeader";

import styles from "./SimilarProducts.module.css";

import similarImg1 from "../../../images/main_area/similar_img_1.png";
import similarImg2 from "../../../images/main_area/similar_img_2.png";
import similarImg3 from "../../../images/main_area/similar_img_3.png";
import similarImg4 from "../../../images/main_area/similar_img_4.png";

const SimilarProducts = () => {
  return (
    <div className={styles.similar_product}>
      <SimilarHeader />
      <div>
        <OtherProduct imgSrc={similarImg1} />
        <OtherProduct imgSrc={similarImg2} />
        <OtherProduct imgSrc={similarImg3} />
        <OtherProduct imgSrc={similarImg4} />
      </div>
    </div>
  );
};

export default SimilarProducts;
