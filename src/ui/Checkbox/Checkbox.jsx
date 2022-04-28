import React from 'react';
import './Checkbox.sass'

const Checkbox = ({id, value, name, label, onChange}) => {
    return (
        <div className='checkbox'>
            <label htmlFor={id}>{label}</label>
            <input type='checkbox' value={value} id={id} name={name} onChange={onChange}/>
        </div>

    );
};

export default Checkbox;