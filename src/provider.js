import React, { Component } from "react";
import { Provider } from "mobx-react";
import balanceStore from "./stores/balanceStore";
import balance from "./balance";

class App extends Component {
    render() {
        return (
            <Provider balanceStore={balanceStore}>
                <balance />
            </Provider>
        );
    }
}

export default App;