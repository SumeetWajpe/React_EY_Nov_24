import React from "react";

export default class Course extends React.Component {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.coursedetails.rating; index++) {
      ratings.push(
        <span style={{ color: "orange" }}>
          <i class="fa-solid fa-star"></i>
        </span>,
      );
    }
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
              <p> {ratings}</p>
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
