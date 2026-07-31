import React from 'react';
import {Episode} from "@/entities/episode";
import {Card, CardContent} from "@heroui/react";

type Props = {
	episode: Episode
}


export const EpisodeListItem = (props: Props) => {
	return (
		<Card>
			<CardContent>
				<p>
					{props.episode.name}
				</p>
			</CardContent>
		</Card>
	);
};

export default EpisodeListItem;
