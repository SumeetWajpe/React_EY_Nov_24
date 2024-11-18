import "./App.css";
import React from "react";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div>
        <Message
          msg="Hey"
          from="John"
          to="Carter"
          imageUrl="https://t3.ftcdn.net/jpg/02/39/06/68/360_F_239066841_TGuyjQRJuQDDML5btQq9jQszX57cQUpk.jpg"
        />
        {/* <Message msg="Hi" from="Peter" to="Parker" />
        <Message msg="Bye" from="James" to="Bond" /> */}
      </div>
    );
  }
}

export default App;
