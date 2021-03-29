import initial from "./initial"

//--------- REDUCER FUNCTIONS -----------
  //RESET SCORES, KEEP GAMES HISTORY
const resetReducer = (state) => {
    return {
        ...state,
        player1: 0,
        player2: 0,
        server: 1,
        winner: 0,
        games: [...state.games]
        }
}

//CHANGE LANGUAGE 
const langReducer = (state, action) => {
    return {
      ...state,
      lang: action.lang
    }
}

//UPDATE SETTINGS
const updateSettings = (state, action) => {
  return {
    ...state,
    player1: 0,
    player2: 0,
    winner: 0,
    server: 1,
    gamestart: true,
    gameID: action.gameID,
    settings: action.settings
  }
}

//UPDATE Scores, Server and Winner from API PATCH request

const updateScoresReducer = (state, { payload }) => {
  return {
    ...state,
    player1: payload.player_1.score,
    player2: payload.player_2.score,
    server: payload.player_1.serving ? 1 : 2,
    winner: payload.player_1.won ? 1 : (payload.player_2.won ? 2 : 0),
  }

}


const gamesReducer = (state, { games }) => {
  
  let gamesHistory = games.map( (game) => {
    return {
      gameID: game.id,
      complete: game.complete,
      player_1 : {
        score: game.player_1.score,
        won: game.player_1.won
      },
      player_2 : {
        score: game.player_2.score,
        won: game.player_2.won
      }
    }
  })

  return {
    ...state,
    games: gamesHistory
  }
}


const removeReducer = (state, action) => {

  // let gamesHistory = 
  // console.log(gamesHistory)
  console.log(action.gameID)
  return {
    ...state,
    games: state.games.filter( (game) => {
      return game.gameID !== parseInt(action.gameID)
    })
  }
}

// -------- REDUCER ------------------
//reducer will update state based on action type given in dispatch function
const reducer = (state, action) =>{
    switch(action.type) {
      case 'NEWGAME': return resetReducer(state);
      case 'RESET' : return initial;
      case 'LANG' : return langReducer(state, action);
      case 'SETTINGS': return updateSettings(state, action);
      case 'UPDATE': return updateScoresReducer(state, action);
      case 'GAMES': return gamesReducer(state, action);
      case 'REMOVE': return removeReducer(state, action)
      default: return state;
    }
  }

export default reducer;