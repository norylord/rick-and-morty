import React from 'react';
import "./Home.sass"
import Button from "../../ui/Button/Button";
import CharactersPage from "../../components/Characters/CharactersPage/CharactersPage";

const Home = () => {
    return (
        <div>
            <div className="info__text">
                <h2>Hi, this is my first app by using React!</h2>
                <h4>@Norylord</h4>
                <h5>Hello world</h5>
            </div>
            <div className="buttonContainer">
                <Button children="Outlined" type="outlined"/>
                <Button children="Solid"/>
            </div>
            <CharactersPage/>
        </div>
    );
};

export default Home;