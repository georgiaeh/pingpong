import initial from "./initial"

//--------- REDUCER FUNCTIONS -----------
//UPDATE PLAYER SCORES
const score = (state, {player}) => {
    return {
        ...state,
        [player] : state[player] + 1
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

    //tests if player 1 has won
    if( (state.player1 >= 21) && (state.player1 > (state.player2 + 1)) ){

        //create object to add to state.games array
        let game = games(state, 1);

        //return state with winner declared and game information recorded
        return {
        ...state,
        winner: 1,
        games: [...state.games, game]
        }
    }

    //tests if player 2 has won
    if( (state.player2 >= 21) && (state.player2 > (state.player1 + 1)) ){

        let game = games(state, 2);

        return {
        ...state,
        winner: 2,
        games: [...state.games, game]
        }
    }

    //if no player has won
    return state;
}

  //RESET SCORES, KEEP GAMES HISTORY
const reset = (state) => {
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
const lang = (state, action) => {
    return {
      ...state,
      lang: action.lang
    }
}

// -------- REDUCER ------------------
//reducer will update state based on action type given in dispatch function
const reducer = (state, action) =>{
    switch(action.type) {
      case 'SCORE': return winner(server(score( state, action )));
      case 'NEWGAME': return reset(state);
      case 'RESET' : return initial;
      case 'LANG' : return lang(state, action);
      default: return state;
    }
  }

export default reducer;