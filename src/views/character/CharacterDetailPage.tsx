import React from 'react';
import {Character, getCharacter} from "@/entities/character";
import {ApiError} from "@/shared/api";
import {notFound,} from "next/navigation";

type TProps = {
	id: number
}

export const CharacterDetailPage = async (props: TProps) => {
	let character

	try {
		character = await getCharacter(props.id) as Character
	} catch (e) {
		if (e instanceof ApiError && e.status === 404) {
			return notFound()
		}
	}

	return (
		<div>
			{JSON.stringify(character)}
		</div>
	);
};

export default CharacterDetailPage;
