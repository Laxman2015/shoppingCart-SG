import React from "react";

import Cart from "./Cart";
import styles from "./Carts.module.scss";

const CartLists = ({ cartItems, actions }) => {
  return (
    <React.Fragment>
      <div className={styles.cardContainer}>
        {cartItems.map((product) => (
          <Cart key={product.id} product={product} actions={actions} />
        ))}
      </div>
      <div className={styles.visaContainer}>
        <h2>VISA/MASTER CARD</h2>
        <h2>Payment</h2>
        <p>Card Number</p>
        <p>_________________________</p>

        <p>Expiary Date</p>
        <p>___/___/________</p>
      </div>
    </React.Fragment>
  );
};

export default CartLists;
