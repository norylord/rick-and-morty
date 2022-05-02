import React, {useEffect, useState} from 'react';
import RequestService from "../../api/Services/RequestService";
import EpisodeList from "../../components/Episodes/EpisodeList/EpisodeList";
import Input from "../../ui/input/Input";
import './EpisodePage.sass'
import Button from "../../ui/Button/Button";

const EpisodePage = () => {

    const cfg = {
        name: null,
        page: 1
    }

    const [episodeData, setEpisodeData] = useState({})
    const [params, setParams] = useState(cfg)

    useEffect(()=>{
        RequestService.allEpisodes(params).then(res => setEpisodeData(res))
    },[params])

    const switchPage = (type) => {
        switch (type) {
            case 'next':
                setParams({...params, page: params.page + 1})
                break
            case 'previous':
                setParams({...params, page: params.page - 1})
                break
            default:
                break
        }
    }

    return (
        <div className='EpisodePage'>
            <div className="searchContainer">
                <Input placeholder="Enter Name" onChange={e => setParams({...params, name: e.target.value})}/>
            </div>
            <EpisodeList data={episodeData}/>
            <div className="pageSwitchers">
                <Button children='Previous' onClick={() => switchPage('previous')}/>
                <Button children='Next' onClick={() => switchPage('next')}/>
            </div>
        </div>
    );
};

export default EpisodePage;