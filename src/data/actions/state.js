  export const scoreP1 = () => ({ type: 'SCORE', player: "player1"})

  export const scoreP2 = () => ({ type: 'SCORE', player: "player2"})

  export const newGame = () => ({type: 'NEWGAME'})

  export const reset = () => ({type: 'RESET'})

  export const lang = (lang) => ({type: 'LANG', lang: lang})

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

  export const updateState = (data) => {
    return {
    type: 'UPDATE',
    payload: data
  }
}

export const updateGames = (data) => {
  return {
    type: 'GAMES',
    games: data
  }
}

export const removeDeletedGame = (gameID) => {
  console.log(gameID)
  return {
    type: 'REMOVE',
    gameID: gameID
  }
}