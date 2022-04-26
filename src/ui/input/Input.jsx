import React from 'react';
import "./Input.sass"
import {AiOutlineSearch} from "react-icons/ai";

const Input = ({name, placeholder, variant, icon, onChange, value}) => {

    if (variant === "search"){
        return (
            <div className="input__container">
                {icon}
                <input placeholder={placeholder} onChange={onChange} value={value}>

                </input>
            </div>
        )
    }
    return (
            <input className="input">

            </input>
    );
};

export default Input;