import styles from "./Navigation.module.css";

const Navigation = () => {
  const links = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-Shirt"];

  return (
    <div className={styles.navigation}>
      {links.map((link, idx) => {
        if (idx === links.length - 1) return;
        return (
          <a href={"#" + link} key={idx + "@@@###@@aa"}>
            <span>{link}</span>
            <span>/</span>
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
