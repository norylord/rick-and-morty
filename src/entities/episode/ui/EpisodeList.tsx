import React from 'react';
import {Episode} from "../model/episode";
import {EpisodeListItem} from "./EpisodeListItem";
import {Skeleton} from "@heroui/react";


export const EpisodeListSkeleton = () => {
	return (
		<div className={'grid grid-cols-1 gap-4 px-4'}>
			{
				Array.from({length: 5}).map((value, i) => (
					<Skeleton className={'h-20 w-full'} animationType={'shimmer'} key={i}/>
				))
			}
		</div>
	)
}

type Props = {
	episodes: Episode[]
}

export const EpisodeList = (props: Props) => {
	return (
		<div className={'grid grid-cols-1 gap-4 px-4'}>
			{
				props.episodes.map(episode => (
					<EpisodeListItem episode={episode} key={episode.id}/>
				))
			}
		</div>
	);
};

