import * as translations from '../../translations.json';

const Winner = ( {lang, winner, p1Name, p2Name}) => {

    const dictionary = translations.default[lang]

    return (
        winner === 0 ? null 
            : <h2 className="alert alert-success"> { winner === 1 ? p1Name : p2Name} {dictionary.wins}!</h2>
    )

}

export default Winner;