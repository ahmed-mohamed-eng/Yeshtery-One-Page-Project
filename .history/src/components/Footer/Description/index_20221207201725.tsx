import AboutCompany from "./AboutCompany";
import CompanyDescription from "./CompanyDescription";

import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <CompanyDescription />
      <AboutCompany />
    </div>
  );
};

export default Description;
