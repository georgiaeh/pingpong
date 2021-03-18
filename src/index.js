import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';

//import what we need from Redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import persistState from "redux-localstorage";
//importing from react-redux
import { Provider } from "react-redux";

//import initial state and reducers
import initial from "./data/initial";
import reducer from "./data/reducer";

// --------- STORE ----------------
//create Store and initialise will initial state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);

  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store = { store }>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
