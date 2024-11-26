import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../rating/rating";
import { deleteCourse } from "../../../redux/reducers/courses.reducer";
import { removeFromCart } from "../../../redux/reducers/cart.reducer";
export default function CartItems() {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  let jsxToBeReturned;

  if (cart.length) {
    jsxToBeReturned = (
      <div>
        {cart.map(c => (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={c.imageUrl}
                  width="100%"
                  className="img-fluid rounded-start"
                  alt={c.title}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">₹. {c.price}</p>
                  <p className="card-text">
                    <Rating noofstars={c.rating} />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-outline-danger mx-1"
                  onClick={() => dispatch(removeFromCart(c.id))}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    jsxToBeReturned = (
      <header>
        <h2> The cart is empty !</h2>
      </header>
    );
  }

  return jsxToBeReturned;
}
