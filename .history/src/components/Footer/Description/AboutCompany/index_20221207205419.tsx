import styles from "./AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div className={styles.about_company}>
      <div className={styles.subscribe}>
        <h5>Subscribe to our newsletter</h5>
        <div className={styles.send_mail}>
          <input placeholder="Enter Your Mail" type="email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.website_navigation}>
          <a href="#About Us">About Us</a>
          <a href="#Contact Us">Contact Us</a>
          <a href="#Track Order">Track Order</a>
          <a href="#Terms & Conditions">Terms & Conditions</a>
          <a href="#Privacy Policy">Privacy Policy</a>
          <a href="#Sell With Us">Sell With Us</a>
          <a href="#Shipping And Returns">Shipping And Returns</a>
        </div>
        <div className={styles.social_media_links}></div>
      </div>
    </div>
  );
};

export default AboutCompany;
