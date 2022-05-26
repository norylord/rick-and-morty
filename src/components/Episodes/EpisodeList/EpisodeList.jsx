import React from 'react';
import Character from "../../Characters/Character/Character";
import Episode from "../Episode/Episode";
import './EpisodeList.sass'

const EpisodeList = ({data}) => {
    return (
        <div className="episodeList">
            {
                data.results ?
                    data.results.map(episode => (
                        <Episode name={episode.name}
                                   airDate={episode.air_date}
                                   created={episode.created}
                                   key={episode.id}
                        />
                    )) : <div className="loading">Loading Episodes</div>
            }
        </div>
    );
};

export default EpisodeList;