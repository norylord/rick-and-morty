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
                setParams({...params, page: params.page < episodeData.info.pages ? params.page + 1 : params.page})
                break
            case 'previous':
                setParams({...params, page: params.page > 1 ? params.page - 1 : params.page})
                break
            case 'end':
                setParams({...params, page: episodeData.info.pages})
                break
            case 'begin':
                setParams({...params, page: 1})
                break
            default:
                break
        }
    }

    return (
        <div className='EpisodePage'>
            {
                episodeData.info ?
                    <div className="dataInfo" style={{margin: 20}}>
                        <h3 style={{textAlign: 'center'}}>Total data: {episodeData.info.count}</h3>
                        <h3 style={{textAlign: 'center'}}>Total pages: {episodeData.info.pages}</h3>
                    </div>
                    :
                    <div></div>
            }
            <div className="searchContainer">
                <Input placeholder="Enter Name" onChange={e => setParams({...params, name: e.target.value})}/>
            </div>

            <EpisodeList data={episodeData}/>
            <div className="pageSwitchers">
                <Button children='Begin' type='outlined' onClick={() => switchPage('begin')}/>
                <Button children='Previous' onClick={() => switchPage('previous')}/>
                <h1>{params.page}</h1>
                <Button children='Next' onClick={() => switchPage('next')}/>
                <Button children='End' type='outlined' onClick={() => switchPage('end')}/>
            </div>
        </div>
    );
};

export default EpisodePage;