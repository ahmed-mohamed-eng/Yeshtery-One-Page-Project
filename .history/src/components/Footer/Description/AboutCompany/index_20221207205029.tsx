import styles from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.about_company}>
      <div className={styles.subscribe}>
        <h5>Subscribe to our newsletter</h5>
        <div className={styles.send_mail}>
          <input placeholder="Enter Your Mail" type="email" />
        </div>
      </div>
      <div className={styles.navigation}></div>
    </div>
  );
};

export default AboutCompany;
