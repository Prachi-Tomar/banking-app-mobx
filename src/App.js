import React, { useState} from "react";
import {useObserver} from "mobx-react";
import { useStores } from "./stores";

const App = () => {
  let [value, setValue] = useState(0);
  let [cost, setCost] = useState(0);
  let [confirmation, setConfirmation] = useState("");
  let [costConfirmation, setCostConfirmation] = useState("");
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
          setConfirmation(`You have successfully withdrawn ${value} dollars.`);
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


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <p>Transactions: {transactionStore.transactions}</p>
      <input
        id="cost"
        type="number"
        value={cost}
        onChange={(event) => {
          setCost(parseInt(event.target.value));
        }}
      />
      <button
        onClick={() => {
          transactionStore.buySomething(cost);
          setCostConfirmation(`You have successfully paid ${cost} dollars.`);
          setCost(0);
        }}
      >Buy It!</button>
      <h6>{costConfirmation}</h6>
      <h2>Transactions History</h2>
      <p>Total transactions: {transactionStore.transactions}</p>
      <button
      onClick={() => {
        transactionStore.reset();
      }}
      >reset</button>
    </React.Fragment>
  )));
}

export default App;
