import React, { useState } from "react";
import Rating from "../rating/rating";

export default function Course(props) {
  return (
    <div className="col-md-3 ">
      <div className="card m-2 shadow rounded-0">
        <img
          src={props.coursedetails.imageUrl}
          className="card-img-top rounded-0"
          alt={props.coursedetails.title}
          width="150px"
          height="150px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <div className="card-text">
            {/* <p>{this.props.coursedetails.rating}</p> */}
            <Rating noofstars={props.coursedetails.rating} />{" "}
          </div>
          <p className="card-text">₹. {props.coursedetails.price}</p>

          <button className="btn btn-outline-primary">
            {props.coursedetails.likes}{" "}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button className="btn btn-outline-danger mx-1">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
