import React, { useState } from 'react';

import CheckBox from './components/checkbox';
import Slider from './components/slider';

const App = () => {

    const [password, setPassword] = useState("");

    const [length, setLength] = useState(20);
    const [isLetters, setIsLetters] = useState(true);
    const [isNumbers, setIsNubmers] = useState(true);
    const [isSpecials, setIsSpecials] = useState(true);
    const [regex, setRegex] = useState("#####_")

    const handlePasswordGenerate = () => {

        let p = "";

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const numbers = "1234567890";
        const specials = "()[]{}?!$%&/=*~,.;:<>"

        let charset = "";

        if(isLetters) charset += letters;
        if(isNumbers) charset += numbers;
        if(isSpecials) charset += specials;

        if(charset){
            for(let i = 0; i < length; i++){
                if(regex[i % regex.length] === "#"){
                    p += charset[Math.floor(Math.random() * charset.length)];
                }else{
                    p += regex[i % regex.length];
                }
            }
        }    

        setPassword(p);
    }

    return(
        <div className="container">

            <div className="controls">
                <CheckBox id="letters" isChecked={isLetters} onChange={() => setIsLetters(!isLetters)} label="Buchstaben"/>
                <CheckBox id="numbers" isChecked={isNumbers} onChange={() => setIsNubmers(!isNumbers)} label="Zahlen"/>
                <CheckBox id="specials" isChecked={isSpecials} onChange={() => setIsSpecials(!isSpecials)} label="Sonderzeichen"/>
                <div className="slider">
                    <Slider onChange={setLength} length={length}/>
                </div>
                <div className="regex">
                    <input type="text" value={regex} onChange={(regex) => setRegex(regex.target.value)}></input>
                </div>
            </div>
            <input type="text" value={password} onChange={(password) => setPassword(password)}></input>
            <button onClick={handlePasswordGenerate}>Generate Password</button>
        </div>
    )
}

export default App;