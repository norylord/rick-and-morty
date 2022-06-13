import React, {useEffect, useState} from 'react';
import RequestService from "../../api/Services/RequestService";
import CharacterList from "../../components/Characters/CharactersList/CharacterList";
import Input from "../../ui/input/Input";
import './CharactersPage.sass'
import Checkbox from "../../ui/Checkbox/Checkbox";
import Button from "../../ui/Button/Button";

const CharactersPage = () => {

    const cfg = {
        name: null,
        status: null,
        page: 1
    }

    const [data, setData] = useState({})
    const [params, setParams] = useState(cfg)


    useEffect(() => {
        RequestService.allCharacters(params).then(res => setData(res))
    }, [params, setParams])

    const changeParams = (type) => {
        switch (type) {
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
            {
                data.info ?
                    <div className="dataInfo">
                        <h3 style={{textAlign: 'center'}}>Total data: {data.info.count}</h3>
                        <h3 style={{textAlign: 'center'}}>Total pages: {data.info.pages}</h3>
                    </div>
                    :
                    <div></div>
            }
            <div className="searchContainer">
                <Input placeholder="Enter Name" onChange={e => setParams({...params, name: e.target.value})}/>
            </div>
                <div className="checkboxContainer">
                    <Checkbox name={'Alive'} id={"Alive"} value={'Alive'} label={'Alive'}
                              onChange={() => changeParams('alive')}/>
                </div>


            <CharacterList data={data}/>
            <div className="pageSwitchers">
                <Button children='<<' type='outlined' onClick={() => switchPage('begin')}/>
                <Button children='<' onClick={() => switchPage('previous')}/>
                <h1>{params.page}</h1>
                <Button children='>' onClick={() => switchPage('next')}/>
                <Button children='>>' type='outlined' onClick={() => switchPage('end')}/>
            </div>
        </div>
    );
};

export default CharactersPage;