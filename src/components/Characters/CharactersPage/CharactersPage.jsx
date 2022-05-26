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
        console.log(params)
        RequestService.allCharacters(params).then(res => setData(res)).then(console.log(data))
    },[params, setParams])

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
                setParams({...params, page: params.page < data.info.pages ? params.page + 1 : params.page})
                break
            case 'previous':
                setParams({...params, page: params.page > 1 ? params.page - 1 : params.page})
                break
            case 'end':
                setParams({...params, page: data.info.pages})
                break
            case 'begin':
                setParams({...params, page: 1})
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
                <Button children='Begin' type='outlined' onClick={() => switchPage('begin')}/>
                <Button children='Previous'  onClick={() => switchPage('previous')}/>
                <h1>{params.page}</h1>
                <Button children='Next' onClick={() => switchPage('next')}/>
                <Button children='End' type='outlined' onClick={() => switchPage('end')}/>
            </div>
        </div>
    );
};

export default CharactersPage;