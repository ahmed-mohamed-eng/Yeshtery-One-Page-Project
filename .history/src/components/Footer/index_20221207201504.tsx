import Details from "./Details";
import Description from "./Description";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Description />
      <Details />
    </footer>
  );
};

export default Footer;
