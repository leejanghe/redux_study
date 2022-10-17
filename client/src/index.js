import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = legacy_createStore(rootReducer, composeWithDevTools());

// const store = legacy_createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLSEXTENSION && window._REDUX_DEVTOOLSEXTENSION_()
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
