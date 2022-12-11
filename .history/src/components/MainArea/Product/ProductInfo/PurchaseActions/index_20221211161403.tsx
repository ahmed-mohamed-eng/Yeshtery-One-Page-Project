import styles from "./PurchaseActions.module.css";

import plusIcon from "../../../../../images/main_area/plus_icon.svg";
import minusIcon from "../../../../../images/main_area/minus_icon.svg";

const PurchaseActions = () => {
  return (
    <div className={styles.purchase_action}>
      <h5>Quantity</h5>
      <div className={styles.quantity}>
        <button>
          <img src={minusIcon} alt="" />
        </button>
        <span></span>
        <button>
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
