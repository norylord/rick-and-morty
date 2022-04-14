import React, {useEffect, useState} from 'react';
import RequestService from "../../../api/Services/RequestService";
import CharacterList from "../CharactersList/CharacterList";

const CharactersPage = () => {

    const [data, setData] = useState({})

    useEffect(()=>{
        RequestService.allCharacters("character").then(res => setData(res))
    },[])

    return (
        <div>
            <CharacterList data={data}/>
        </div>
    );
};

export default CharactersPage;