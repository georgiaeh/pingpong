import * as translations from '../../translations.json';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const Settings = ( { lang, handleSettings } ) => {

    const dictionary = translations.default[lang];

    const [p1Name, setP1Name] = useState("");
    const [p2Name, setP2Name] = useState("");
    const [winningScore, setWinningScore] = useState(21);
    const [altServe, setAltServe] = useState(5);

    const handleP1Name = (e) => { 
        setP1Name(e.currentTarget.value)
    }

    const handleP2Name = (e) => {
        setP2Name(e.currentTarget.value)
    }

    const handleScore = (e) => {
        setWinningScore(e.currentTarget.value)
    }

    const handleServe = (e) => {
        setAltServe(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            p1Name: p1Name,
            p2Name: p2Name,
            winningScore: winningScore,
            altServe: altServe
        }

        //send information to application state
        handleSettings(data);
    }

    return (
        <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Label className="mt-4"> {dictionary.player} 1</Form.Label>
            <Form.Control 
                type="text" 
                placeholder={dictionary.name} 
                value = {p1Name}
                onChange = {handleP1Name}
            />

            <Form.Label className="mt-4"> {dictionary.player} 2</Form.Label>
            <Form.Control 
                type="text" 
                placeholder={dictionary.name} 
                value = {p2Name}
                onChange = {handleP2Name}
            />

            <Form.Label className="mt-4"> {dictionary.winning}</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="21" 
                value = { winningScore } 
                onChange={handleScore}
            />

            <Form.Label className="mt-4">{dictionary.alt_serve}</Form.Label>
            <Form.Control as="select" onChange={handleServe} value={altServe}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
            <Button className="mt-4" type="submit">Play!</Button>
        </Form>
    )


}

export default Settings;