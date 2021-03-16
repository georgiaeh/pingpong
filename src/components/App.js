import Player1 from './ScoreCard/Player1';
import Player2 from './ScoreCard/Player2';
import Button from './Button/index.js';
import Winner from './Winner/index.js';
import Table from './Table/index.js'

const App = ( { player1, player2, server, handleP1Score, handleP2Score, handleNewGame, handleReset, winner, history, lang, handleLang}) =>{

  const handleChange = (e) => {
    let selectedLang = e.target.value;
    handleLang(selectedLang)
  }

  return (
  <>
    <select id="lang" name="lang" onChange = {handleChange}>
      <option value="EN">English</option>
      <option value="EO">Esperanto</option>
      <option value="FR">French</option>
    </select>

    {/* header */}
    <header className="jumbotron mt-4 mb-0">  
      <h1>PongPing</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <Player1 
        player = { 1 } 
        handleScore = { handleP1Score } 
        />
      <Player2
        player = { 2 } 
        handleScore = { handleP2Score } 
      />
    </div>

    <Winner />

    { /* New Game button - Resets Scores */}
    <Button 
      handleClick = {handleNewGame} 
      buttonText = "new_game"
    />

    {/* Previous Games History */}
    <Table  />

    { /* Resets all state */}
    <Button 
      handleClick = {handleReset} 
      buttonText = "reset"
    />
  </>
);
}

export default App;