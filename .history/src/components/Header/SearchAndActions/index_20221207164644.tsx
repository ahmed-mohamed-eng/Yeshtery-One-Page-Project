import Actions from "./Actions";
import Brand from "./Brand";
import Search from "./Search";
import styles from "./SearchAndActions.module.css";

const SearchAndActions = () => {
  return (
    <div className={styles.search_and_actions}>
      <Search />
      <Brand />
      <Actions />
    </div>
  );
};

export default SearchAndActions;
