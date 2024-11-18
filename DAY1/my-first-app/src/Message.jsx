import React from "react";

export default class Message extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.messagedetails.imageUrl}
          alt={this.props.messagedetails.msg}
          height={100}
          width={200}
        />
        <h2> {this.props.messagedetails.msg} ! </h2>
        <h3> From : {this.props.messagedetails.from}</h3>
        <h3> To : {this.props.messagedetails.to}</h3>
      </div>
    );
  }
}
