// ------ INITIAL STATE -----------------
//Object will create the inital values for state when 
//passed in to createStore as 2nd argument
const initial = {
    player1: 0,
    player2: 0,
    server: 1,
    winner: 0,
    games: [],
    lang: "EN",
    gamestart: false,
    settings : {
      p1Name: "",
      p2Name: "",
      winningScore: 21,
      altServe: 5
    }
    
  };

  export default initial;