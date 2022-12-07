import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";
import MainArea from "./MainArea";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <MainArea />
      <Footer />
    </div>
  );
};

export default Layout;
