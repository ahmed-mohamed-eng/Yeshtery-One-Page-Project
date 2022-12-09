import styles from "./CompanyDescription.module.css";

import companyLogo from "../../../../images/footer/company_logo.png";

const CompanyDescription = () => {
  return (
    <div className={styles.company_description}>
      <h3>
        <img src={companyLogo} alt="" />
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor
        sit amet, consectetuer adipiscing elit, sed dia m nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
        minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
        nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
        in hendrerit in vulputate velit esse molestie consequat, vel illum
        dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit
      </p>
    </div>
  );
};

export default CompanyDescription;
