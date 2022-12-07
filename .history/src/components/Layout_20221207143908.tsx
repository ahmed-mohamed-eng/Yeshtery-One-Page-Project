import Footer from "./Footer";
import Header from "./Header";
import MainArea from "./MainArea";

import styles from "./Layout.module.scss";

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
