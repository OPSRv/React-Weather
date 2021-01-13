import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Weather from "./Components/Wether";

class App extends React.Component {

  render() {
    return (
        <Weather city="Rivne"/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

