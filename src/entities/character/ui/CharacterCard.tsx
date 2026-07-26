import React from 'react';
import {Character} from "@/entities/character";
import Image from "next/image";

type TProps = {
	character: Character
}

const cardClass = 'w-full aspect-video rounded-md overflow-hidden'

export const CharacterCardSkeleton = () => {
	return (
		<div className={[cardClass, "animate-pulse bg-gray-700 h-full w-full"].join(' ')}>

		</div>
	)
}

const CharacterCard = (props: TProps) => {
	return (
		<div className={[cardClass, "h-full w-full border border-gray-500/20 bg-mist-800 grid grid-cols-2"].join(' ')}>
			<div className={' p-4'}>
				<p className={"text-xl"}>
					{props.character.name}
				</p>
			</div>
			<div>
				<Image src={props.character.image} alt={props.character.name} width={300} height={300}
				       className={'size-full object-cover'}/>
			</div>
		</div>
	);
};

export default CharacterCard;
