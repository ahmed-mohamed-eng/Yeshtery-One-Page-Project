import styles from "./Price.module.css";

export interface PriceProps {
  price: number;
  discountInPercent: number;
}

const Price = (props: PriceProps) => {
  return (
    <div className={styles.price}>
      <div>
        <span>{props.price} LE</span>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Price;
