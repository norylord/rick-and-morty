import React from 'react';
import './InfoContainer.sass'
import Button from "../../ui/Button/Button";
import { useNavigate } from 'react-router-dom'

const InfoContainer = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="info__text">
                <h2>Hi, this is my first app by using React!</h2>
                <h4>@Norylord</h4>
                <h5>Hello world</h5>
            </div>
            <div className="buttonContainer">
                <Button children="Character" type="outlined" onClick={() => navigate('/')}/>
                <Button children="Episode" onClick={() => navigate('/episode')}/>
            </div>
        </div>
    );
};

export default InfoContainer;