import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Weather from "./Components/Wether";

class App extends React.Component {

  render() {
    return (
      <Fragment>
        <Weather />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
