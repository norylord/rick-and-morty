import React, {useEffect, useState} from 'react';
import RequestService from "../../api/Services/RequestService";
import EpisodeList from "../../components/Episodes/EpisodeList/EpisodeList";
import Input from "../../ui/Input/Input";
import PageSwitchers from "../../components/PageSwitchers/PageSwitchers";

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
            <PageSwitchers page={params.page} switchPage={switchPage}/>
        </div>
    );
};

export default EpisodePage;