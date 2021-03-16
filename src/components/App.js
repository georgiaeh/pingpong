import ScoreCard from './ScoreCard/ScoreCard';
import Button from './Button/Button';
import Winner from './Winner/Winner';
import * as translations from '../translations.json';

const App = ( { player1, player2, server, handleP1Score, handleP2Score, handleNewGame, handleReset, winner, history, lang, handleLang}) =>{

  const dictionary = translations.default[lang]
  const checked = false

  const handleCheck = () => {
    //change the checked status 
    handleLang()
  }

  return (
  <>
      
      <div className="form-check form-switch">
          <input className="form-check-input" 
            type="checkbox" 
            id="flexSwitchCheckDefault"    
            onChange = {handleCheck}
            checked= { checked }
          />
          <label 
            className="form-check-label" 
            htmlFor="flexSwitchCheckDefault" 
            >
            Esperanto?
          </label>
        </div>
        

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
          winner = { winner }
          lang = { lang }/>
        <ScoreCard 
          player = { 2 } 
          score = { player2 }
          handleScore = { handleP2Score } 
          server = { server }
          winner = { winner }
          lang = { lang }/>
      </div>

      <Winner lang = { lang } winner = { winner } />

      { /* New Game button - Resets Scores */}
      <Button 
        handleClick = {handleNewGame} 
        buttonText = { dictionary.new_game }
      />

      {/* Previous Games History */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col"> {dictionary.game} </th>
            <th scope="col"> {dictionary.player} 1 </th>
            <th scope="col"> {dictionary.player} 2 </th>
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
      <Button 
        handleClick = {handleReset} 
        buttonText = { dictionary.reset }
      />
  </>
);
}

export default App;