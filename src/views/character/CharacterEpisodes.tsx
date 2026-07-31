import React from 'react';
import {EpisodeList, getEpisode} from "@/entities/episode";

type Props = {
	episodesIds: string
}


export const CharacterEpisodes = async (props: Props) => {
	let episodes
	try {
		episodes = await getEpisode(props.episodesIds)
	} catch (e) {
		return (
			<div>
				Эпизоды не найдены
			</div>
		)
	}

	if (!Array.isArray(episodes)) episodes = [episodes]

	return (
		<div>
			<EpisodeList episodes={episodes}/>
		</div>
	);
};
