import { makeAutoObservable } from "mobx";

class TransactionStore{
    transactions = 0
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    buySomething = (cost) =>
    {
        this.rootStore.balanceStore.withdraw(cost);
        this.transactions ++;
    }
    reset = () =>
    {
        this.transactions = 0;
    }
}

export default TransactionStore;