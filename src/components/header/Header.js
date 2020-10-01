import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon, Logout } from "../../iconComponent";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { itemCount, isUserLoggedIn, logout } = props;
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <span className={styles.headerLeft}>Shopping Cart</span>
      <span className={styles.headerRight}>
        <Link to="/shoppingcart-sg/">Home/App Store</Link>
        {isUserLoggedIn ? (
          <span>
            <Link to="/shoppingcart-sg/cart">
              <CartIcon /> Cart ({itemCount}){" "}
            </Link>
            <Link to="/shoppingcart-sg/">
              <Logout />
              <span onClick={() => dispatch(logout())}>Logout</span>{" "}
            </Link>
          </span>
        ) : (
          <Link to="/shoppingcart-sg/login">Sign in</Link>
        )}
      </span>
    </header>
  );
};

export default Header;
