import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Maintenance from "@/pages/Maintenance";
import { MAINTENANCE } from "./maintenance.config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {MAINTENANCE ? <Maintenance /> : <App />}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
