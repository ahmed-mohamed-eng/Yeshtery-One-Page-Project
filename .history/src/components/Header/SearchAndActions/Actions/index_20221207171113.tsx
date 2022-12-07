import styles from "./Actions.module.css";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.single_action}>
        <img src={shoppingCartIcon} alt="" />
        <span>Cart</span>
      </div>
    </div>
  )
}

export default Actions;