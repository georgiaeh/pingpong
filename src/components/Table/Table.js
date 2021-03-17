import * as translations from '../../translations.json';

const Table = ({ lang, history, p1Name, p2Name }) => {

    const dictionary = translations.default[lang]

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

