import styles from "./AboutCompany.module.css";

import sendMailIcon from "../../../../images/footer/send_mail_icon.svg";

const AboutCompany = () => {
  return (
    <div className={styles.about_company}>
      <div className={styles.subscribe}>
        <h5>Subscribe to our newsletter</h5>
        <div className={styles.send_mail}>
          <input placeholder="Enter Your Mail" type="email" />
          <button>
            <span>Subscribe</span>
            <img src={sendMailIcon} alt="Send us email" />
          </button>
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
        <div className={styles.social_media_links}>
          <a href="#facebook">/YESHTERY</a>
          <a href="#linkedin">/YESHTERY</a>
          <a href="#instagram">/YESHTERY</a>
          <a href="#twitter">/YESHTERY</a>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
