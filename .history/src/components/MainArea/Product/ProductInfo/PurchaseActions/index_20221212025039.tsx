import { useState, useContext } from "react";

import ProductContext from "../../../../../utils/ProductContext";

import styles from "./PurchaseActions.module.css";

import plusIcon from "../../../../../images/main_area/plus_icon.svg";
import minusIcon from "../../../../../images/main_area/minus_icon.svg";

const PurchaseActions = () => {

  const {productNumber, setProductNumber} = useContext(ProductContext)

  const [quantity, setQuantity] = useState(1);

  const addOneMore = () => {
    setQuantity(quantity + 1);
  };

  const subtractOne = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const addToCart = () => {

  }

  return (
    <div className={styles.purchase_action}>
      <h5>Quantity</h5>
      <div className={styles.quantity}>
        <button onClick={subtractOne}>
          <img src={minusIcon} alt="" />
        </button>
        <span>{quantity}</span>
        <button onClick={addOneMore}>
          <img src={plusIcon} alt="" />
        </button>
      </div>
      <div className={styles.action}>
        <button>Add To Cart</button>
        <button>Pickup From Store</button>
      </div>
    </div>
  );
};

export default PurchaseActions;
