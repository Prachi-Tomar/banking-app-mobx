import { action, observable, makeAutoObservable } from "mobx";

class BalanceStore{
    balance = 0
    constructor() {
        makeAutoObservable(this)
    }

    deposit = (amount) =>
    {
        this.balance += amount;
    }
    withdraw = (amount) =>
    {
        this.balance -= amount;
    }
}

export default new BalanceStore();