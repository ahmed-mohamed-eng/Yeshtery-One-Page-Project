import styles from "./Navigation.module.css";

const Navigation = () => {
  const links = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-Shirt"];

  return (
    <div className={styles.navigation}>
      {links.map((link, idx) => {
        return (
          <>
            <a href={"#" + link} key={idx + "@@@###@@aa"}>
              <span>{link}</span>
            </a>
            {idx !== links.length - 1 ? (
              <span key={idx + "@@@###@@aaSSS"}>/</span>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Navigation;
