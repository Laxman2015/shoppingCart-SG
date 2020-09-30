export const handleLogin = () => {
  return { type: "LOGIN" };
};

export const handleLogout = () => {
  return { type: "LOG_OUT" };
};

export const increase = (payload) => {
  return { type: "INCREASE", payload };
};

export const decrease = (payload) => {
  return { type: "DECREASE", payload };
};

export const addProduct = (payload) => {
  return { type: "ADD_ITEM", payload };
};

export const removeProduct = (payload) => {
  return { type: "REMOVE_ITEM", payload };
};

export const clearCart = () => {
  return { type: "CLEAR" };
};

export const handleCheckout = () => {
  return { type: "CHECKOUT" };
};
