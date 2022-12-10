import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.copy_wright}>
        <p>© 2021 yeshtery, all rights reserved.</p>
      </div>
      <div className={styles.accepted_payments}>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className={styles.powered_by}></div>
    </div>
  );
};

export default Details;
