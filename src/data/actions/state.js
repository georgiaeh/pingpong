  // State Action -- no longer used as API handles this now
  // export const scoreP1 = () => ({ type: 'SCORE', player: "player1"})

  // State Action -- no longer used as API handles this now
  // export const scoreP2 = () => ({ type: 'SCORE', player: "player2"})


  //State Action -- returns action that wipes state to enable a new game
  export const newGame = () => ({type: 'NEWGAME'})

  //State Action -- returns action that resets entire app
  export const reset = () => ({type: 'RESET'})

  //State Action -- returns action that changes app language to selected language
  export const lang = (lang) => ({type: 'LANG', lang: lang})

  //State Action -- returns action to update settings. Data is either from API call or from current state -- See postNewGame API action
  //Changes data returned from API call to be in the right format before passing to reducer
  export const settings = (data) => ({
    type: 'SETTINGS', 
    gameID: data.id,
    settings: {
      p1Name: data.player_1.name,
      p2Name: data.player_2.name,
      winningScore: data.winning_score,
      altServe: data.change_serve
    }
  })

  //State Action -- returns action to update state based on result of API call from a player scoring -- See patchScore API action
  export const updateState = (data) => {
    return {
    type: 'UPDATE',
    payload: data
  }
}

//State action - returns action to update games history -- See getGames API action
export const updateGames = (data) => {
  return {
    type: 'GAMES',
    games: data
  }
}

//State action - returns action to trigger removing the game with the passed in gameID from state.games array -- See API deleteGames
//Game is removed from API database in aPI call, this removes game from App's state
export const removeDeletedGame = (gameID) => {
  console.log(gameID)
  return {
    type: 'REMOVE',
    gameID: gameID
  }
}