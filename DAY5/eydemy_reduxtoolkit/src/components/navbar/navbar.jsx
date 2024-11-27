import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart/carticon/carticon";
import { useSelector } from "react-redux";

export default function Navbar() {
  const userdetails = useSelector(store => store.auth);
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          EYdemy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/newcourse">
                New Course
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/postbyid">
                Get Post By Id
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/contextapi">
                ContextAPI
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-warning"> Hello {userdetails.username} !</div>{" "}
        <CartIcon />
      </div>
    </nav>
  );
}
