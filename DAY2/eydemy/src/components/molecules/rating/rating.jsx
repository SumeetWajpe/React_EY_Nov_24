import React, { Component } from "react";
import Star from "../../atoms/icon/star";

export default class Rating extends Component {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(<Star />);
    }
    return <div>{ratings}</div>;
  }
}
