import { extendObservable, action } from "mobx";

export default extendObservable(this, {
    balance: 0,
    deposit: action(() => {
        this.balance += 1;
    }),
    withdraw: action(() => {
        this.balance += 1;
    })
});
