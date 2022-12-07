import styles from "./Search.module.css";

import searchIcon from "../../../../images/header/search_and_actions/search_icon.svg";

const Search = () => {
  return (
    <div className={styles.search}>
      <img src={searchIcon} alt="" />
      <input placeholder="Search" />
    </div>
  );
};

export default Search;
