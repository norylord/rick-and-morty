import React from 'react';
import "./Input.sass"
import {AiOutlineSearch} from "react-icons/ai";

const Input = ({name, placeholder, variant, icon}) => {

    if (variant === "search"){
        return (
            <div className="input__container">
                {icon}
                <input placeholder={placeholder}>

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