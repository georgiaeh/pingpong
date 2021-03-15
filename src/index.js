import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import what we need from Redux
import { createStore } from 'redux';

// ------ INITIAL STATE -----------------
//Object will create the inital values for state when 
//passed in to createStore as 2nd argument
const initial = {
  player1: 0,
  player2: 0,
  server: 1,
  winner: 0,
  games: []
};

//--------- REDUCER FUNCTIONS -----------
//UPDATE PLAYER SCORES
const score = (state, action) => {
  return {
      ...state,
      [action.player] : state[action.player] + 1
    };
}

//UPDATE WHICH PLAYER IS SERVING
const server = (state) => {
  
  if(state.player1 >= 20 && state.player2 >=20){
    //start to alternate sever between players when both scores are over 20

    let toServe = state.server === 1 ? 2 : 1;

    return {
      ...state,
      server: toServe
    }

  } else {
    //else alternate server every 5 points 

    let sumScores = state.player1 + state.player2;
    let toServe = Math.floor(sumScores / 5) % 2 === 0 ? 1 : 2;

    return {
    ...state,
    server: toServe
  }
  }
}

//CREATE GAME OBJECT TO ADD TO state.games WHEN A PLAYER WINS A GAME
const games = (state, winner) => {
  return {
      player_1 : {
        score: state.player1,
        won: winner === 1 ? true : false
      },
      player_2 : {
        score: state.player2,
        won: winner === 2 ? true : false
      }
  }
}

//DETERMINE IF THERE IS A WINNER
const winner = (state) => {
  if( (state.player1 >= 21) && (state.player1 > (state.player2 + 1))){

    //create object to add to state.games array
    let game = games(state, 1);

    //return state with winner declared and game information recorded
    return {
      ...state,
      winner: 1,
      games: [...state.games, game]
    }
  }
  if( (state.player2 >= 21) && (state.player2 > (state.player1 + 1)) ){

    let game = games(state, 2);

    return {
      ...state,
      winner: 2,
      games: [...state.games, game]
    }
  }
  return state;
  
}

//RESET SCORES, KEEP GAMES HISTORY
const reset = (state) => {
  return {
      player1: 0,
      player2: 0,
      server: 1,
      winner: 0,
      games: [...state.games]
    }
}

// -------- REDUCER ------------------
//reducer will update state based on action type given in dispatch function
const reducer = (state, action) =>{
  switch(action.type) {
    case "INCREMENT": return winner(server(score( state, action )));
    case "RESET": return reset(state);
    default: return state;
  }
}


// --------- STORE ----------------
//create Store and initialise will initial state
const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );


// --------- EVENT HANDLERS ----------------
//Event handlers to be passed in to App through props
//update player scores
const P1Scores = () => {
  store.dispatch( { type: 'INCREMENT', player: "player1"});
}
const P2Scores = () => {
  store.dispatch( { type: 'INCREMENT', player: "player2"});
} 
const resetScores = () => {
  store.dispatch( { type: 'RESET'})
}


//------- RENDER APP --------------
const render = () => {
  
  let state = store.getState();
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
        player1 = {state.player1}
        player2 = {state.player2}
        server = {state.server}
        handleP1Score = {P1Scores}
        handleP2Score = {P2Scores}
        handleReset = {resetScores}
        winner = {state.winner}
        history = {state.games}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe( render );
render();