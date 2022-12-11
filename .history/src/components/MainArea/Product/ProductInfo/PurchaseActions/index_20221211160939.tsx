import styles from "./PurchaseActions.module.css";

const PurchaseActions = () => {
  return (
    <div className={styles.purchase_action}>
      <h5>Quantity</h5>
      <div>
        <button>
          <img src="" alt="" />
        </button>
        <span></span>
        <button>
          <img src="" alt="" />
        </button>
      </div>
      <div className={styles.quantity}>
        <span>
          <img src="" alt="" />
        </span>
        <span></span>
        <span>
          <img src="" alt="" />
        </span>
      </div>
      <div>
        <button>Add To Cart</button>
        <button>Pickup From Store</button>
      </div>
    </div>
  );
};

export default PurchaseActions;
