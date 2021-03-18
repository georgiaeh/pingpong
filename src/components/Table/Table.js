import { useEffect } from 'react';
import * as translations from '../../translations.json';

const Table = ({ winner, lang, history, p1Name, p2Name , handleLoad, handleDelete}) => {

    const dictionary = translations.default[lang]

    useEffect( () => {
        handleLoad();
        // eslint-disable-next-line
    }, [winner, history.length])

    const handleClick = (e) => {
        let gameID = e.currentTarget.id
       handleDelete(gameID)
    }

    return (
        <table className="table mt-4">
        <thead>
        <tr>
            <th scope="col"> {dictionary.game} </th>
            <th scope="col"> {p1Name} </th>
            <th scope="col"> {p2Name}  </th>
        </tr>
        </thead>
        <tbody>
        {history.filter( (game) => game.complete === true).map( (game, index) => {
        return (
            <tr key={index}>
            <th scope="row">{game.gameID}</th>
            <td 
                className={ game.player_1.won ? "table-success" : "table-danger"} > 
                {game.player_1.score} 
            </td>
            <td 
                className={ game.player_2.won ? "table-success" : "table-danger"}>
                {game.player_2.score} 
                </td>
                <td><button className="btn btn-light" onClick={handleClick} id={game.gameID}> x </button></td>
            </tr>)
            })}
        </tbody>
        </table>
    )
}

export default Table

