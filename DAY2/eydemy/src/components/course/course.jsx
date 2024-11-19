import React from "react";
import Rating from "../molecules/rating/rating";

export default class Course extends React.Component {
  render() {
    return (
      <div className="col-md-3 ">
        <div className="card m-2 shadow rounded-0">
          <img
            src={this.props.coursedetails.imageUrl}
            className="card-img-top rounded-0"
            alt={this.props.coursedetails.title}
            width="150px"
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            <div className="card-text">
              {/* <p>{this.props.coursedetails.rating}</p> */}
              <p>
                {" "}
                <Rating noofstars={this.props.coursedetails.rating} />{" "}
              </p>
            </div>
            <p className="card-text">₹. {this.props.coursedetails.price}</p>

            <button className="btn btn-outline-primary">
              {this.props.coursedetails.likes}{" "}
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
}
