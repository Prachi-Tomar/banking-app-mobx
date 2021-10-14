import React from "react"
import BalanceStore from "./balanceStore"
import TransactionStore from "./transactionStore"

class RootStore {
    constructor() {
      this.balanceStore = new BalanceStore(this)
      this.transactionStore = new TransactionStore(this)
    }
  }

  const StoresContext = React.createContext(new RootStore());
  export const useStores = () => React.useContext(StoresContext);

  export default new RootStore();