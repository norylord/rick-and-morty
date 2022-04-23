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
                    <h1>{name}</h1>
                    <h2>{status} {gender}</h2>
                    <h2>Location: {location}</h2>
                </div>
                <div>
                    <Link to={`character/${id}`} style={{ textDecoration: 'none' }}><Button children="Details" type="outlined"/></Link>
                </div>

            </div>

        </div>
    );
};

export default Character;