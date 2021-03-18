  export const scoreP1 = () => ({ type: 'SCORE', player: "player1"})

  export const scoreP2 = () => ({ type: 'SCORE', player: "player2"})

  export const newGame = () => ({type: 'NEWGAME'})

  export const reset = () => ({type: 'RESET'})

  export const lang = (lang) => ({type: 'LANG', lang: lang})

  export const settings = (data) => ({type: 'SETTINGS', settings: data})