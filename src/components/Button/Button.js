import * as translations from '../../translations.json';

const Button = ( {handleClick, lang, buttonText} ) => {

    const dictionary = translations.default[lang]

    return (
        <button className="btn btn-warning" onClick = {handleClick}> {dictionary[buttonText]}</button> 
    )
}

export default Button;