import React, { Component } from "react";
import { observer } from "mobx-react";

export default observer(({ store }) =>
<div>
    <h1>
        {store.balance}
    </h1>
    <button onClick={store.deposit}>deposit</button>
    <button onClick={store.withdraw}>withdraw</button> 
</div>
)