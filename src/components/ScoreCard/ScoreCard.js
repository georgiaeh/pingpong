const ScoreCard = ( {player, score, handleScore, server, winner, lang, name}) => {


    return (
        <div className="col-md-6 mt-4">
            <div className={server === player ? "card text-center bg-dark text-white" : "card text-center"}>
                <h5 className="card-header"> 
                    {name}
                </h5>
                <div className="card-body">
                    <p className="card-text display-1">{score}</p>
                </div>
                <div className="card-footer">
                    <button  className="form-control btn btn-success" onClick={handleScore} disabled={ winner !== 0 }>+</button> 
                    
                </div>
            </div>
        </div>
    )
}

export default ScoreCard;