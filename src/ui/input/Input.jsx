import React from 'react';
import "./Input.sass"
import {AiOutlineSearch} from "react-icons/ai";

const Input = ({name, placeholder, variant, icon, onChange, value}) => {

    switch (variant){
        case "search":
            return <div className="input__container">
                {icon}
                <input placeholder={placeholder} onChange={onChange} value={value}>
                </input>
            </div>
        default:
            return <input className='Input' placeholder={placeholder} onChange={onChange} value={value}/>

    }
};

export default Input;