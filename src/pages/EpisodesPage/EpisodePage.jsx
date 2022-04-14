import React, {useEffect, useState} from 'react';
import RequestService from "../../api/Services/RequestService";
import EpisodeList from "../../components/Episodes/EpisodeList/EpisodeList";

const EpisodePage = () => {

    const [episodeData, setEpisodeData] = useState({})

    useEffect(()=>{
        RequestService.allCharacters("episode").then(res => setEpisodeData(res))
    },[])

    return (
        <div>
            <EpisodeList data={episodeData}/>
        </div>
    );
};

export default EpisodePage;