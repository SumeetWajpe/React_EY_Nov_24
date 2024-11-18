import React from "react";

export default class Message extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} alt={this.props.msg} />
        <h2> {this.props.msg} ! </h2>
        <h3> From : {this.props.from}</h3>
        <h3> To : {this.props.to}</h3>
      </div>
    );
  }
}
