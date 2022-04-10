import React from 'react';
import "./CharacterList.sass"
import Character from "../Character/Character";
import {logDOM} from "@testing-library/react";

const CharacterList = ({data}) => {

    return (
        <div className="characterList">
            {
                data.results ?
                data.results.map(char => (
                    <Character name={char.name}
                               gender={char.gender}
                               status={char.status}
                               location={char.location["name"]}
                               image={char.image}
                               key={char.id}
                    />
                )) : <div className="loading">Loading Chars</div>
            }
        </div>
    );
};

export default CharacterList;