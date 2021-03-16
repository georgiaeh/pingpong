import * as translations from '../translations.json';

const ScoreCard = ( {player, score, handleScore, server, winner, lang}) => {

    const dictionary = translations.default[lang]

    return (
        
          <div className="col-md-6 mt-4">
              <div className={server === player ? "card text-center bg-dark text-white" : "card text-center"}>
                    <h5 className="card-header"> 
                        {dictionary.player} {player}
                    </h5>
                  <div className="card-body">
                      <p className="card-text display-1">{score}</p>
                  </div>
                  <div className="card-footer">
                      { winner === 0 ? 
                        <button  className="form-control btn btn-success" onClick={handleScore}>+</button> 
                        : <button  className="form-control btn btn-success" disabled>+</button> }
                  </div>
              </div>
          </div>
    )
}

export default ScoreCard;