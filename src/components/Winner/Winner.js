import * as translations from '../../translations.json';

const Winner = ( {lang, winner}) => {

    const dictionary = translations.default[lang]

    return (
        winner === 0 ? null 
            : <h2 className="alert alert-success">{ dictionary.player} { winner === 1 ? 1 : 2} {dictionary.wins}!</h2>
    )

}

export default Winner;