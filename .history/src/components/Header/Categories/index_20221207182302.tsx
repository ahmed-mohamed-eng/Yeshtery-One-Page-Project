import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2>Men</h2>
      <h2>Women</h2>
      <h2>Unisex</h2>
      <h2>Kids</h2>
      <h2>Best Sellers</h2>
      <h2>New Arrivals</h2>
      <h2>Offers</h2>
    </div>
  );
};

export default Categories;
