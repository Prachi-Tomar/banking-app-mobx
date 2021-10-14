import { makeAutoObservable } from "mobx";

class BalanceStore{
    balance = 0
    deposits = 0
    withdrawals = 0
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    deposit = (amount) =>
    {
        this.balance += amount;
        this.deposits++;
    }
    withdraw = (amount) =>
    {
        this.balance -= amount;
        this.withdrawals++;
    }
    reset = () =>
    {
        this.deposits = 0;
        this.withdrawals = 0;
        this.balance = 0;
    }
}

export default BalanceStore;