import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h3>Men</h3>
      <h3>Women</h3>
      <h3>Unisex</h3>
      <h3>Kids</h3>
      <h3>Best Sellers</h3>
      <h3>New Arrivals</h3>
      <h3>Offers</h3>
    </div>
  );
};

export default Categories;
