import styles from "./Price.module.css";

export interface PriceProps {
  price: number;
  discountInPercent: number;
}

const Price = () => {
  return (
    <div className={styles.price}>
      <div>
        <span>9,999 LE</span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Price;
