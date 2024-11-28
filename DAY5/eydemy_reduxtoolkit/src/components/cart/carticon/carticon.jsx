import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const cart = useSelector(store => store.cart);
  return (
    <div>
      <i className="fa-solid fa-cart-shopping" style={{ color: "orange" }}></i>{" "}
      <span className="badge rounded-pill text-bg-secondary">
        <Link to="/dashboard/cart">{cart.length}</Link>
      </span>
    </div>
  );
}
