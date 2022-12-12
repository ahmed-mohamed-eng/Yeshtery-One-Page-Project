import { createContext } from "react";

const ProductContext = createContext({
  productNumber: 0,
  setProductNumber: (num: number) => {},
});

export default ProductContext;
