import styles from "./Price.module.css";

export interface PriceProps {
  price: number;
  discountInPercent: number;
}

const Price = (props: PriceProps) => {
  const priceAfterDiscount = getPriceAfterDiscount(
    props.price,
    props.discountInPercent
  );

  return (
    <div className={styles.price}>
      <div>
        <span>{priceAfterDiscount} LE</span>
      </div>
      <div>
        <span>{props.price}</span>
      </div>
      <div>
        <span>{props.discountInPercent}% Off</span>
      </div>
    </div>
  );
};

export default Price;

function getPriceAfterDiscount(price: number, discountInPercent: number) {
  const discountAmount = (discountInPercent / 100) * price;
  return price - discountAmount;
}
