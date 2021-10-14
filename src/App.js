import React, { useState} from "react";
import {useObserver} from "mobx-react";
import { useStores } from "./stores";

const App = () => {
  let [value, setValue] = useState(0);
  let [confirmation, setConfirmation] = useState("");
  const {balanceStore, transactionStore} = useStores();
  return(
    useObserver(() => (
    <React.Fragment>
      <p>Balance: {balanceStore.balance}</p>
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
          balanceStore.deposit(value);
          setConfirmation(`You have successfully deposited ${value} dollars.`);
          setValue(0);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          balanceStore.withdraw(value);
          setConfirmation(`You have successfully withrdrawn ${value} dollars.`);
          setValue(0);
        }}
      >
        -
      </button>
      <h6>{confirmation}</h6>
      <h2>Balance History</h2>
      <p>Total deposits: {balanceStore.deposits}</p>
      <p>Total withdrawals: {balanceStore.withdrawals}</p>
      <button
      onClick={() => {
        balanceStore.reset();
      }}
      >reset</button>
    </React.Fragment>
  )));
}

export default App;
