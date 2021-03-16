import * as translations from '../../translations.json';

const Table = ({ lang, history }) => {

    const dictionary = translations.default[lang]

    return (
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
    )
}

export default Table

