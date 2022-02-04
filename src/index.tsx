import * as serviceWorker from './serviceWorker';
import React from 'react';
import './index.css';
import store, { RootStateType } from "./redux/state";
import ReactDOM from "react-dom";
import { renderTree } from "./render";



 store.subscribe(renderTree)
renderTree()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// subscribe()