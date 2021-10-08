import React, { Component } from "react";

import balanceStore from "./balanceStore";
import balance from "./balance";

class App extends Component {
  render() {
    return <balance store={balanceStore} />;
  }
}

export default App;
