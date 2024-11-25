import React from "react";
import { useSelector } from "react-redux";

export default function CartIcon() {
  const cart = useSelector(store => store.cart);
  return (
    <div>
      <i className="fa-solid fa-cart-shopping" style={{ color: "orange" }}></i>{" "}
      <span className="badge rounded-pill text-bg-primary">{cart.length}</span>
    </div>
  );
}
