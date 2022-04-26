import React, {useEffect, useState} from 'react';
import RequestService from "../../../api/Services/RequestService";
import CharacterList from "../CharactersList/CharacterList";
import Button from "../../../ui/Button/Button";
import Input from "../../../ui/input/Input";

const CharactersPage = () => {

    const cfg = {
        name: null,
        status: null
    }

    const [data, setData] = useState({})
    const [params, setParams] = useState(cfg)


    useEffect(()=>{
        RequestService.allCharacters(params).then(res => setData(res))
    },[params])

    return (
        <div>
            <Input placeholder="Enter Name" value="" onChange={e => setParams({...params, name: e.target.value})}/>
            <Button children={"lalala"} onClick={() => setParams({...params, name: 'Morty', status: 'Dead'})}/>
            <CharacterList data={data}/>
        </div>
    );
};

export default CharactersPage;