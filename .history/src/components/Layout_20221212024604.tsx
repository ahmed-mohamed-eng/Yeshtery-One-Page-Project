import { useState } from "react";
import ProductContext from "../utils/ProductContext";

import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.css";

export interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const [productCartNumber, setProductCartNumber] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        productNumber: productCartNumber,
        setProductNumber: setProductCartNumber,
      }}
    >
      <div className={styles.layout}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </ProductContext.Provider>
  );
};

export default Layout;
