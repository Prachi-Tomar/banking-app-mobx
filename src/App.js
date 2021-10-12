import React, { Component, useState} from "react";
import {observer} from "mobx-react";
import balanceStore from "./balanceStore";

const App = observer(({store}) => {
  let [value, setValue] = useState(0);
  let [confirmation, setConfirmation] = useState("");
  return (
    <React.Fragment>
      <p>Balance: {store.balance}</p>
      <input
        id="value"
        type="number"
        value={value}
        onChange={(event) => {
          setValue(parseInt(event.target.value));
        }}
      />
      <button
        onClick={() => {
          store.deposit(value);
          setConfirmation(`You have successfully deposited ${value} dollars.`);
          setValue(0);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.withdraw(value);
          setConfirmation(`You have successfully withrdrawn ${value} dollars.`);

          setValue(0);
        }}
      >
        -
      </button>
      <h6>{confirmation}</h6>
    </React.Fragment>
  );
})

export default App;
