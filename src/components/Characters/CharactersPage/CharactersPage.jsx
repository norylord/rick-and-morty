import React, {useEffect, useState} from 'react';
import RequestService from "../../../api/Services/RequestService";
import CharacterList from "../CharactersList/CharacterList";
import Input from "../../../ui/input/Input";
import './CharactersPage.sass'

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
        <div className='characterPage'>
            <div className="searchContainer">
                <Input placeholder="Enter Name" onChange={e => setParams({...params, name: e.target.value})}/>
            </div>
            <CharacterList data={data}/>
        </div>
    );
};

export default CharactersPage;