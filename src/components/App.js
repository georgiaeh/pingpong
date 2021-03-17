import LangSelect from './LangSelect';
import Player1 from './ScoreCard/Player1';
import Player2 from './ScoreCard/Player2';
import ButtonReset from './Button/ButtonReset.js';
import ButtonNG from './Button/ButtonNewGame';
import Winner from './Winner/index.js';
import Table from './Table/index.js'

const App = ( { player1, player2, server, handleP1Score, handleP2Score, winner, history, lang, handleLang}) =>{

  

  return (
  <>
   
   <LangSelect />

    {/* header */}
    <header className="jumbotron mt-4 mb-0">  
      <h1>PongPing</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <Player1 player = { 1 } />
      <Player2 player = { 2 } />
    </div>

    <Winner />

    { /* New Game button - Resets Scores */}
    <ButtonNG
      buttonText = "new_game"
    />

    {/* Previous Games History */}
    <Table  />

    { /* Resets all state */}
    <ButtonReset
      buttonText = "reset"
    />
  </>
);
}

export default App;