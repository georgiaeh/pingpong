import LangSelect from './LangSelect';
import Settings from './Settings'
import Player1 from './ScoreCard/Player1';
import Player2 from './ScoreCard/Player2';
import ButtonReset from './Button/ButtonReset.js';
import ButtonNG from './Button/ButtonNewGame';
import Winner from './Winner';
import Table from './Table'

const App = ( { settings }) =>{

  return (
  <>
   
   <LangSelect />

    <header className="jumbotron mt-4 mb-0">  
      <h1>PongPing</h1>
    </header>


    {settings? 
      <>
      <div className="row mb-4">
        <Player1 player = { 1 } />
        <Player2 player = { 2 } />
      </div>
      <Winner />
      <ButtonNG buttonText = "new_game" />
      <Table  />
      <ButtonReset buttonText = "reset" />
      </>
      : <Settings />}
    

    
  </>
);
}

export default App;