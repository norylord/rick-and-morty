import React from 'react';
import "./Button.sass"


const Button = ({type, size, children, disabled, onClick, href, ...props}) => {
    if (type === "outlined"){
        return <button className="button outlined" children={children} onClick={onClick} disabled={disabled}/>
    }

    return (
        <button className="button solid" children={children} onClick={onClick} disabled={disabled}/>
    );
};

export default Button;