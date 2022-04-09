import React from 'react';
import "./Input.sass"
import {AiOutlineSearch} from "react-icons/ai";

const Input = ({name, placeholder, variant}) => {

    if (variant === "search"){
        return (
            <div className="input__container">
                <AiOutlineSearch/>
                <input placeholder={placeholder}>

                </input>
            </div>

        )
    }

    return (
        <div className="input__container">
            <input className="input">

            </input>
        </div>
    );
};

export default Input;