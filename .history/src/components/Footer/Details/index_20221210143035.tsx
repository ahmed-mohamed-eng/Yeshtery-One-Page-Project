import styles from "./Details.module.css";

import cashLogo from "../../../images/footer/cash_logo.png";
import visaLogo from "../../../images/footer/visa_logo.png";
import nasnavLogo from "../../../images/footer/nasnav_logo.png";
import mastercardLogo from "../../../images/footer/mastercard_logo.png";

const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.copy_wright}>
        <p>© 2021 yeshtery, all rights reserved.</p>
      </div>
      <div className={styles.accepted_payments}>
        <img src={cashLogo} alt="Pay with cash on delivery" />
        <img src={visaLogo} alt="Pay with Visa" />
        <img src={mastercardLogo} alt="Pay with Mastercard" />
      </div>
      <div className={styles.powered_by}>
        <span>Powered By</span>
        <img src={nasnavLogo} alt="Powered By Nasanav" />
      </div>
    </div>
  );
};

export default Details;
