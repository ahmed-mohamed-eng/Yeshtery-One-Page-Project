import styles from "./Navigation.module.css";

const Navigation = () => {
  const links = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-Shirt"];

  return (
    <div className={styles.navigation}>
      {links.map((link, idx) => {
        if (idx === links.length - 1) return null;
        return (
          <a href={"#" + link} key={idx + "@@@###@@aa"}>
            <span>{link}</span>
            {idx !== links.length - 1 ? <span>/</span> : null}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
