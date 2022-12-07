import Categories from "./Categories";
import OffersAndInfo from "./OffersAndInfo";
import SearchAndActions from "./SearchAndActions";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <OffersAndInfo />
      <SearchAndActions />
      <Categories/>
    </header>
  );
};

export default Header;
