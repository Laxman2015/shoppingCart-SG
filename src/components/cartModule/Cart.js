import React from "react";
import {
  PlusIcon,
  MinusIcon,
  TrashIcon,
} from "../../iconComponent";
import styles from "./Carts.module.scss";
import { formatNumber } from "../../utility";
const Cart = ({ product, actions }) => {
  const { increase, decrease, removeProduct } = actions;

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgWidth}>
        <img
          alt={product.name}
          style={{ margin: "0 auto", maxHeight: "100px" }}
          src={product.url}
          className="img-fluid d-block"
        />
      </div>
      <div className={styles.prodInfo}>
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-1">Price: {formatNumber(product.price)} </p>
      </div>
      <div>
        <p className="mb-0">Qty: {product.quantity}</p>
      </div>
      <div className={styles.prodAction}>
        <button onClick={() => increase(product)}>
          <PlusIcon width={"20px"} />
        </button>

        <button onClick={() => decrease(product)}>
          <MinusIcon width={"20px"} />
        </button>

        <button onClick={() => removeProduct(product)}>
          <TrashIcon width={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
