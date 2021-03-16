const Button = ( {handleClick, buttonText, style} ) => {

    return (
        <button className="btn btn-warning" onClick = {handleClick}> {buttonText}</button> 
    )
}

export default Button;