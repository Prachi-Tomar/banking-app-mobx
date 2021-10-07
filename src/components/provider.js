import React, { Component } from "react";
import { Provider } from "mobx-react";
import accountStore from "./stores/accountStore";
import balance from "./balance";

class App extends Component {
    render() {
        return (
            <Provider accountStore={accountStore}>
                <balance />
            </Provider>
        );
    }
}

export default App;