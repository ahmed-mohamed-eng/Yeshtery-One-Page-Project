import styles from "./Header.module.css";
import OffersAndInfo from "./OffersAndInfo";

const Header = () => {
  return (
    <header className={styles.header}>
      <OffersAndInfo />
    </header>
  );
};

export default Header;
