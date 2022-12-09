import styles from "./CompanyDescription.module.css";

import companyLogo from "../../../../images/footer/company_logo.png";

const CompanyDescription = () => {
  return (
    <div className={styles.company_description}>
      <h3>
        <img src={companyLogo} alt="" />
      </h3>
    </div>
  );
};

export default CompanyDescription;
