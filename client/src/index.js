import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { CoordinateContextProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <CoordinateContextProvider>
      <App />
    </CoordinateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
