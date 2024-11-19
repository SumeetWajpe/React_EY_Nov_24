import React from "react";
import Rating from "../molecules/rating/rating";

export default class Course extends React.Component {
  state = { currLikes: this.props.coursedetails.likes };
  IncrementLikes() {
    // this.props.coursedetails.likes++; // props are read-only
    // this.state.currLikes++; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 }); // new state
  }

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
              <Rating noofstars={this.props.coursedetails.rating} />{" "}
            </div>
            <p className="card-text">₹. {this.props.coursedetails.price}</p>

            <button
              className="btn btn-outline-primary"
              onClick={() => this.IncrementLikes()}
            >
              {/* {this.props.coursedetails.likes}{" "} */}
              {this.state.currLikes} <i className="fa-solid fa-thumbs-up"></i>
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
