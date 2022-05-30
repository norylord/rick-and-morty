import React from 'react';
import "./Character.sass"
import Button from "../../../ui/Button/Button";
import {Link} from "react-router-dom";

const Character = ({id, name, status, gender, location, image}) => {

    return (
        <div className="character">
            <img src={image} alt=""/>
            <div className="character__info">
                <div>
                    <h2>{name}</h2>
                    <h3>{status} {gender}</h3>
                    <h3>Location: {location}</h3>
                </div>
                <div>
                    <Link to={`character/${id}`} style={{ textDecoration: 'none' }}><Button children="Details" type="outlined"/></Link>
                </div>
            </div>

        </div>
    );
};

export default Character;