import ProductColor from './ProductColor';

import styles from './ProductInfo.module.css';

const ProductInfo = () => {
  return (
    <div className={styles.product_info}>
      <ProductColor/>
    </div>
  )
}

export default ProductInfo;