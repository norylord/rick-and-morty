import React, {useEffect, useState} from 'react';
import RequestService from "../../../api/Services/RequestService";
import {useParams} from "react-router-dom";
import './CharacterInfo.sass'


const CharacterInfo = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(()=>{
        RequestService.allCharacters(`/character/${id}`).then(res => setCharacter(res))
        console.log(id)
    },[])

    return (
        <div className="characterInfo">
            <div className="characterCard">
                <img src={character.image} alt=""/>
                <div className="characterData">
                    <h1>{character.name}</h1>
                    <h2>{character.status}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.species}</h2>
                </div>
            </div>
        </div>
    );
};

export default CharacterInfo;