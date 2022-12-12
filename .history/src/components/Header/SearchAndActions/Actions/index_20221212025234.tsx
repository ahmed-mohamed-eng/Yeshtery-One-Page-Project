import { useContext } from "react";
import ProductContext from "../../../../utils/ProductContext";

import styles from "./Actions.module.css";

import loginIcon from "../../../../images/header/search_and_actions/login_icon.svg";
import whishListIcon from "../../../../images/header/search_and_actions/whishlist_icon.svg";
import shoppingCartIcon from "../../../../images/header/search_and_actions/shoppting_cart_icon.svg";

const Actions = () => {
  const { productNumber } = useContext(ProductContext);

  return (
    <div className={styles.actions}>
      <div className={styles.single_action}>
        <img src={shoppingCartIcon} alt="" />
        <span>Cart</span>
        <span className={styles.floating_counter}>{productNumber}</span>
      </div>
      <div className={styles.single_action}>
        <img src={whishListIcon} alt="" />
        <span>Wishlist</span>
        <span className={styles.floating_counter}>0</span>
      </div>
      <div className={styles.single_action}>
        <img src={loginIcon} alt="" />
        <span>Login</span>
      </div>
    </div>
  );
};

export default Actions;