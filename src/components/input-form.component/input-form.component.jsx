import { useState } from "react";

const InputField = ({id, label, onChange, ...otherProps }) => {
    const [isActive, setIsActive] = useState(true);

    const handleInput = (event) => {
        if (event.target.value !== "") { 
            return setIsActive(true) 
        } else {
            return setIsActive(false)
        }
    }

    return (
        <div className="input-group">
            <input 
                className={`input ${isActive ? "onFocus": ""}`} 
                id={id} 
                onChange={onChange} 
                onInput={handleInput} 
                {...otherProps} /> 
            <br/>
            <label className={`label ${isActive ? "active": ""}`} for={id}>{label}</label>
        </div>
    )
}

export default InputField;