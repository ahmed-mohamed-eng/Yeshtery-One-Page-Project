import OffersAndInfo from "./OffersAndInfo";

import styles from "./Header.module.css";
import SearchAndActions from "./SearchAndActions";

const Header = () => {
  return (
    <header className={styles.header}>
      <OffersAndInfo />
      <SearchAndActions />
    </header>
  );
};

export default Header;
