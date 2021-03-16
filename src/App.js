import ScoreCard from './components/ScoreCard'

const App = ( { player1, player2, server, handleP1Score, handleP2Score, handleNewGame, handleReset, winner, history}) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
        <ScoreCard 
          player = { 1 } 
          score = { player1 } 
          handleScore = { handleP1Score } 
          server = { server }
          winner = { winner }/>
        <ScoreCard 
          player = { 2 } 
          score = { player2 }
          handleScore = { handleP2Score } 
          server = { server }
          winner = { winner }/>
      </div>

      { winner === 0 ? null :
      <h2 className="alert alert-success">Player { winner === 1 ? 1 : 2} wins!</h2>}

      <hr />

      { /* New Game button - Resets Scores */}
      <button className="btn btn-warning" onClick = {handleNewGame}>New Game</button>

      {/* Previous Games History */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col"> Game </th>
            <th scope="col"> Player 1 </th>
            <th scope="col"> Player 2 </th>
          </tr>
        </thead>
        <tbody>
        {history.map( (game, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td 
                className={ game.player_1.won ? "table-success" : "table-danger"} > 
                {game.player_1.score} 
              </td>
              <td 
                className={ game.player_2.won ? "table-success" : "table-danger"}>
                  {game.player_2.score} 
                </td>
            </tr>)
            })}
        </tbody>
      </table>

      { /* Resets all state */}
      <button className="btn btn-danger" onClick = {handleReset}> Reset </button>
  </>
);

export default App;