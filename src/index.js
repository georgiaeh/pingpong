import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';

//import what we need from Redux
import { createStore, compose } from 'redux';
import persistState from "redux-localstorage";

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
  composeEnhancers(persistState())
);


// --------- EVENT HANDLERS ----------------
//Event handlers to be passed in to App through props
const P1Scores = () => {
  store.dispatch( { type: 'SCORE', player: "player1"});
}
const P2Scores = () => {
  store.dispatch( { type: 'SCORE', player: "player2"});
} 
const newGame = () => {
  store.dispatch( { type: 'NEWGAME'})
}
const resetGame = () => {
  store.dispatch( { type: 'RESET'})
}
const changeLang = (selectedLang) => {
  store.dispatch( {type: 'LANG', lang: selectedLang})
}


//------- APP --------------

  
let state = store.getState();
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store = { store }>
        <App 
          player1 = {state.player1}
          player2 = {state.player2}
          server = {state.server}
          handleP1Score = {P1Scores}
          handleP2Score = {P2Scores}
          handleNewGame = {newGame}
          handleReset = {resetGame}
          winner = {state.winner}
          history = {state.games}
          lang = {state.lang}
          handleLang = {changeLang}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
