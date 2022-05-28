import React from "react";
import ReactDOM from "react-dom/client";
import {Provider, providers} from "react-redux";
import App from "./App";
import { ReactReduxContext } from "react-redux";
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);
