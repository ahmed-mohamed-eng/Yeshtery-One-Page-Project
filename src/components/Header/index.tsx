import OffersAndInfo from "./OffersAndInfo";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <OffersAndInfo />
    </header>
  );
};

export default Header;
