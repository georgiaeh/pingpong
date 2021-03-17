const LangSelect = ( { handleLang }) => {
    
    const handleChange = (e) => {
        let selectedLang = e.target.value;
        handleLang(selectedLang)
    }

    return (
    <select id="lang" name="lang" onChange = {handleChange}>
    <option value="EN">English</option>
    <option value="EO">Esperanto</option>
    </select>
    )
}

export default LangSelect;