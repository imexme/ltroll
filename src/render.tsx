import store, {RootStateType, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const renderTree = (store: StoreType) => {

    ReactDOM.render(
            <App store={store}/>,

    document.getElementById('root'));
}