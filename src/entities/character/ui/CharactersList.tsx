import React from 'react';
import {Character} from "@/entities/character";
import CharacterCard from "./CharacterCard";
import {CharacterCardSkeleton} from "./CharacterCard";

type TProps = {
	characters: Character[]
}

const listClasses: string = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-4 p-15"

export const CharactersListSkeleton = () => {
	return (
		<div className={listClasses}>
			{
				Array.from({length: 20}).map((value, i) =>
					<CharacterCardSkeleton key={i}/>
				)
			}
		</div>
	)
}

export const CharactersList = (props: TProps) => {
	return (
		props.characters.length ?
			(
				<div className={listClasses}>
					{
						props.characters.map((character) =>
							<CharacterCard character={character} key={character.id}/>
						)
					}
				</div>
			) :
			(
				<div className={'size-full flex flex-col justify-center items-center'}>
					<p className={'text-lg md:text-2xl lg:text-4xl'}>По вашему запросу ничего не найдено</p>
					<p className={'text-lg md:text-2xl lg:text-2xl mt-4 opacity-80'}>Попробуйте изменить фильтрацию</p>
				</div>
			)
	);
};

export default CharactersList;
