import { useState } from 'react';

const Form = () => {
    const [passwordLength, setPasswordLength] = useState(6);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    return (
        <>
            <div className="form-group">
                <label htmlFor="password-strength">
                    Password Length:
                </label>
                <input 
                    type="number"
                    className="pw" 
                    defaultValue={passwordLength} 
                    onChange={(e) => setPasswordLength(e.target.value)} 
                    id="password-strength"
                    min="6"
                    max="23"   
                />
            </div>
            <div className="form-group">
                <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
                <input 
                    type="checkbox"
                    checked={includeUpperCase}
                    onChange={(e) => setIncludeUpperCase(e.target.checked)} 
                    id="uppercase-letters" 
                    name="uppercase-letters" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
                <input 
                    type="checkbox"
                    checked={includeLowerCase}
                    onChange={(e) => setIncludeLowerCase(e.target.checked)} 
                    id="lowercase-letters" 
                    name="lowercase-letters" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="include-numbers">Include Numbers</label>
                <input 
                    type="checkbox"
                    checked={includeNumbers} 
                    onChange={(e) => setIncludeNumbers(e.target.checked)} 
                    id="include-numbers" 
                    name="include-numbers" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="include-symbols">Include Symbols</label>
                <input 
                    type="checkbox"
                    checked={includeSymbols} 
                    onChange={(e) => setIncludeSymbols(e.target.checked)} 
                    id="include-symbols" 
                    name="include-symbols" 
                />
            </div>
            <button className="generator__btn">
                Generate Password
            </button>
        </>
    );
}

export default Form;
