import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.scss";

export interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
