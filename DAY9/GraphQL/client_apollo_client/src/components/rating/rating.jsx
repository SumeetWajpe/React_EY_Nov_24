import React from "react";
import Star from "../icon/star";

export default function Rating(props) {
  let ratings = [];
  for (let index = 0; index < props.noofstars; index++) {
    ratings.push(<Star key={index} />);
  }
  return <div>{ratings}</div>;
}
