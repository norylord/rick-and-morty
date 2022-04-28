import React, {useEffect, useState} from 'react';
import RequestService from "../../../api/Services/RequestService";
import CharacterList from "../CharactersList/CharacterList";

const CharactersPage = () => {

    const [data, setData] = useState({})

    useEffect(()=>{
        RequestService.allCharacters("character").then(res => setData(res))
    },[])

    const changeParams = (type) => {
        switch (type){
            case 'alive':
                setParams({...params, status: params.status === 'Alive' ? null : 'Alive'})
                break
        }
    }

    return (
<<<<<<< Updated upstream
        <div>
=======
        <div className='characterPage'>
            <div className="searchContainer">
                <Input placeholder="Enter Name" onChange={e => setParams({...params, name: e.target.value})}/>
                <div className="checkboxContainer">
                    <Checkbox name={'Alive'} id={"Alive"} value={'Alive'} label={'Alive'} onChange={() => changeParams('alive')}/>
                </div>
            </div>
>>>>>>> Stashed changes
            <CharacterList data={data}/>
        </div>
    );
};

export default CharactersPage;