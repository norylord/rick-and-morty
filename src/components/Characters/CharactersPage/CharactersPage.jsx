import React, {useEffect, useState} from 'react';
import RequestService from "../../../api/Services/RequestService";
import CharacterList from "../CharactersList/CharacterList";
import Input from "../../../ui/input/Input";
import './CharactersPage.sass'
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Button from "../../../ui/Button/Button";

const CharactersPage = () => {

    const cfg = {
        name: null,
        status: null,
        page: 1
    }

    const [data, setData] = useState({})
    const [params, setParams] = useState(cfg)


    useEffect(()=>{
        RequestService.allCharacters(params).then(res => setData(res))
    },[params])

    const changeParams = (type) => {
        switch (type){
            case 'alive':
                setParams({...params, status: params.status === 'Alive' ? null : 'Alive'})
                break
            default:
                break
        }
    }
    const switchPage = (type) => {
        switch (type) {
            case 'next':
                setParams({...params, page: params.page++})
                break
            case 'previous':
                setParams({...params, page: params.page--})
                break
            default:
                break
        }
    }

    return (
        <div className='characterPage'>
            <div className="searchContainer">
                <Input placeholder="Enter Name" onChange={e => setParams({...params, name: e.target.value})}/>
                <div className="checkboxContainer">
                    <Checkbox name={'Alive'} id={"Alive"} value={'Alive'} label={'Alive'} onChange={() => changeParams('alive')}/>
                </div>
            </div>
            <CharacterList data={data}/>
            <div className="pageSwitchers">
                <Button children='Previous' onClick={() => switchPage('previous')}/>
                <Button children='Next' onClick={() => switchPage('next')}/>
            </div>
        </div>
    );
};

export default CharactersPage;