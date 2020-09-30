import React from "react";
import StoreItems from "./StoreItems";
import styles from "./Home.module.scss";

const Products = ({ products, cartItems, searchItem }) => {
  if(products.length <= 0){
    return <div className={styles.loading}><strong>Loading...</strong></div>;
  }
  return (
    <div className={styles.container}>
      <div className="row">
        <div className={styles.headerCont}>
          <div className={styles.products}>{products.length} Record(s)</div>
          <div className={styles.searchBox}>
            <input
              type="text"
              name=""
              onChange={searchItem}
              placeholder="Search items"
              className="form-control"
              id=""
            />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {products.map((product) => (
          <StoreItems
            key={product.id}
            product={product}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
