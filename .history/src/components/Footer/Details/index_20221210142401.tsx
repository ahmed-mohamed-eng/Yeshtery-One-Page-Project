import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.copy_wright}></div>
      <div className={styles.accepted_payments}></div>
      <div className={styles.powered_by}></div>
    </div>
  );
};

export default Details;
